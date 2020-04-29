import { Acl } from 'acl'

import { actions } from './acl.actions'
import { resources } from './acl.resources'
import { roles } from './acl.roles'

export const getPostsPermissions = (acl: Acl): any[] => {
  const postPermissions: any = []

  // Anonymous (can read posts in full detail)
  postPermissions.push(acl.allow(
    roles.ANONYMOUS,
    [resources.POST, resources.CATEGORY],
    actions.ALL.READ_DETAIL,
  ))

  // Users (can read posts in full detail)
  postPermissions.push(acl.allow(
    roles.USER,
    [
      resources.POST,
    ],
    actions.ALL.READ_DETAIL
  ))

  // Admin (can create, update, delete and read all posts)
  postPermissions.push(acl.allow(
    roles.ADMIN,
    [
      resources.POST,
    ],
    Object.values(actions.ALL)
  ))

  return postPermissions
}
