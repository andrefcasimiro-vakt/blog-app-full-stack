import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host'
import { GqlExecutionContext } from '@nestjs/graphql/dist/services/gql-execution-context'

import { JwtGuard } from '../jwt/jwt.guard'
import { UserRole } from '../user/user.enum'
import { User } from '../user/user.model'
import { AclProvider } from './acl.provider'
import { Resource } from './acl.roles-decorator'

@Injectable()
export class AclGuard extends JwtGuard {
	constructor(private readonly _reflector: Reflector, private readonly _aclProvider: AclProvider) {
		super()
	}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const gqlCtx = GqlExecutionContext.create(context)
		const req = gqlCtx.getContext().req

		await super.canActivate(new ExecutionContextHost([ req ]))

		const resourceToTest = this._reflector.get<Resource>('resource', context.getHandler())

		const user: User = req.user

		// Dont think we can use this logic since if no jwt is found on our validator, it throws an error
		// If no user, fallback to anonymous user
		if (!user) {
			user.id = 0
			user.role = UserRole.ANONYMOUS
		}

		const acl = this._aclProvider.getAclInstance()
		await acl.addUserRoles(user.id, user.role)

		const { resource, action } = resourceToTest

		const isAllowed: boolean = await acl.isAllowed(user.id, resource, action)

		return isAllowed
	}
}
