import { Injectable } from '@nestjs/common'
import AclModule from 'acl'
import { ForbiddenError } from 'apollo-server-express'

import { User } from '../user/user.model'
import { config } from './acl.config'
import { roles } from './acl.roles'

@Injectable()
export class AclProvider {
	private readonly _aclModule: AclModule.Acl

	constructor() {
		this._aclModule = new AclModule(new AclModule.memoryBackend())
		this.config()
	}

	async config() {
		await config(this._aclModule)
	}

	getAclInstance() {
		return this._aclModule
	}

	async authorizeAgainst(resource: string, action: string, user: User): Promise<boolean> {
		const isAllowed = await this.hasAccess(resource, action, user)

		if (!isAllowed) {
			throw new ForbiddenError('Proibido')
		}

		return isAllowed
	}

	/**
   * Checks if user has access to given resource in order to move forward
   * with the request
   * 
   * If not JWT token is found in the request,
   * falls back to an Anonymous user
   * 
   */
	async hasAccess(resource: string, action: string, user: User): Promise<boolean> {
		const responseUser = user || { role: roles.ANONYMOUS, id: 0 }

		await this._aclModule.addUserRoles(responseUser.id, responseUser.role)

		return this._aclModule.isAllowed(responseUser.id, resource, action)
	}
}
