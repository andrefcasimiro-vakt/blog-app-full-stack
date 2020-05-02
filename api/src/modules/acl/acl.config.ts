import { Acl } from 'acl'

import { getPostsPermissions } from './acl.permissions.post'
import { getUserPermissions } from './acl.permissions.user'
import { roles } from './acl.roles'

export const config = (acl: Acl) => {
	const promises = []

	promises.push(...getPostsPermissions(acl), ...getUserPermissions(acl))

	// Hierarchy
	promises.push(acl.addRoleParents(roles.USER, roles.ANONYMOUS))
	promises.push(acl.addRoleParents(roles.ADMIN, roles.USER))

	return Promise.all(promises)
}
