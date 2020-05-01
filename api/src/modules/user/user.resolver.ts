import { ConflictException, NotFoundException, UseGuards } from '@nestjs/common'
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { equals, isEmpty, reject } from 'ramda'
import { User } from 'src/modules/user/user.model'
import { UserProvider } from 'src/modules/user/user.provider'

import { actions } from '../acl/acl.actions'
import { AclGuard } from '../acl/acl.guard'
import { isSameUser } from '../acl/acl.helpers'
import { AclProvider } from '../acl/acl.provider'
import { resources } from '../acl/acl.resources'
import { AuthorizeAgainst } from '../acl/acl.roles-decorator'
import { checkPassword } from '../auth/auth.helpers'
import { AuthUser } from '../auth/auth.model'
import { hashString } from '../bcrypt/bcrypt.helpers'
import { EmailTypeEnum } from '../email/email.email-types'
import ConflictError from '../error/error.conflict-error'
import { generic } from '../error/error.constants'
import NotFoundError from '../error/error.not-found-error'
import { CurrentUser } from '../graphql/graphql.decorator.current-user'
import { GqlAuthGuard } from '../graphql/graphql.guard'
import { QueueProvider } from '../queue/queue.provider'
import { workerTasks } from '../worker/worker.tasks'
import { ICreateUser, IDeleteUser, IUpdateUser } from './user.inputs'

@Resolver((of) => User)
export class UserResolver {
	constructor(
		private readonly _aclProvider: AclProvider,
		private readonly _userProvider: UserProvider,
		private readonly _queueProvider: QueueProvider,
	) {}

	@UseGuards(AclGuard)
	@AuthorizeAgainst({ resource: resources.USER, action: actions.ALL.READ })
	@Query((returns) => User, { name: 'whoAmI' })
	whoAmI(@CurrentUser() user: AuthUser) {
		return this._userProvider.findById(user.id)
	}

	@UseGuards(AclGuard)
	@AuthorizeAgainst({ resource: resources.USER, action: actions.ALL.READ })
	@Query((returns) => User, { name: 'getUserById' })
	async findById(
		@Args('id', { type: () => Int })
		id: number,
	): Promise<User> {
		const user = await this._userProvider.findById(id)

		if (!user) {
			throw new NotFoundError(generic.NOT_FOUND, `User with id ${id} does not exist`)
		}

		return user
	}

	@UseGuards(AclGuard)
	@AuthorizeAgainst({ resource: resources.USER, action: actions.ALL.READ })
	@Query((returns) => User, { name: 'getUserByUsername' })
	async findByUsername(@Args('username') username: string): Promise<User> {
		const user = await this._userProvider.findByUsername(username)

		if (!user) {
			throw new NotFoundError(generic.NOT_FOUND, `User with username ${username} does not exist`)
		}

		return user
	}

	@UseGuards(AclGuard)
	@AuthorizeAgainst({ resource: resources.USER, action: actions.ALL.READ })
	@Query((returns) => [ User ], { name: 'listUsers' })
	async listUsers(@CurrentUser() user: User): Promise<Partial<User[]>> {
		return this._userProvider.listUsers()
	}

	/**
   * Updates a user with the id provided in the input
   * 
   * An acl check is done prior to ensure that only the following cases are possible:
   * - Ctx user must be the same as the user to be updated
   * - Ctx user must be an administrator, in which case he is allowed to update any user accounts
   * 
   */
	@UseGuards(GqlAuthGuard)
	@Mutation((returns) => User, { name: 'updateUser' })
	async updateUser(@Args('input') input: IUpdateUser, @Context() ctx): Promise<Partial<User>> {
		const { user: ctxUser } = ctx.req

		if (isSameUser(ctxUser, input)) {
			await this._aclProvider.authorizeAgainst(resources.USER, actions.OWN.UPDATE, ctxUser)
		} else {
			await this._aclProvider.authorizeAgainst(resources.USER, actions.ALL.UPDATE, ctxUser)
		}

		const user = await this._userProvider.findById(input.id)
		if (!user) {
			throw new ConflictError(generic.CONFLICT, `User with id: ${input.id} could not be found.`)
		}

		// Is updating password?
		if (input.password) {
			// TODO: Require previous password to continue operation
			const hashedPassword = await hashString(input.password)
			input.password = hashedPassword
		}

		// Filter null properties
		const filteredInput = reject(equals('') || isEmpty)(input)

		await this._userProvider.updateUser(filteredInput)

		return {
			id: user.id,
		}
	}

	/**
   * Deletes a user with the id provided in the input
   * 
   * An acl check is done prior to ensure that only the following cases are possible:
   * - Ctx user must be the same as the user to be deleted
   * - Ctx user must be an administrator, in which case he is allowed to delete any user accounts
   * 
   */
	@UseGuards(GqlAuthGuard)
	@Mutation((returns) => Boolean, { name: 'deleteUser' })
	async deleteUser(@Args('input') input: IDeleteUser, @Context() ctx): Promise<boolean> {
		const { user } = ctx.req

		if (isSameUser(user, input)) {
			await this._aclProvider.authorizeAgainst(resources.USER, actions.OWN.DELETE, user)
		} else {
			await this._aclProvider.authorizeAgainst(resources.USER, actions.ALL.DELETE, user)
		}

		// Delete posts, comments, profiles first
		await this._userProvider.deleteUser(input)

		return true
	}

	// For admins
	@Mutation((returns) => User, { name: 'createUser' })
	async createUser(@Args('input') input: ICreateUser): Promise<Partial<User>> {
		const { username, email, password, role, isActive } = input

		const userByUsername = await this._userProvider.findByUsername(username)
		if (userByUsername) {
			throw new ConflictError(generic.CONFLICT, `Username is already registered`)
		}

		const userByEmail = await this._userProvider.findByEmail(email)
		if (userByEmail) {
			throw new ConflictError(generic.CONFLICT, `Email is already registered`)
		}

		checkPassword(password)

		const hashedPassword = await hashString(password)

		const createdUser = await this._userProvider.createUser(username, email, hashedPassword, role, isActive)

		// Send email
		this._queueProvider.dispatch<{ type: string } & User>({
			type: 'EMAIL_SEND',
			payload: {
				type: EmailTypeEnum.ACCOUNT_CREATED,
				...createdUser,
			},
		})

		return createdUser
	}
}
