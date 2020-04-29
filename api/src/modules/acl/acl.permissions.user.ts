import { Acl } from 'acl'

import { actions } from './acl.actions'
import { resources } from './acl.resources'
import { roles } from './acl.roles'

export const getUserPermissions = (acl: Acl): any[] => {
  const userPermissions: any = []

  // Anonymous (can not see users)

  // Users (can see other users)
  userPermissions.push(acl.allow(
    roles.USER,
    [
      resources.USER,
    ],
    actions.ALL.READ
  ))

  // Users (can read, update and delete their own accounts)
  userPermissions.push(acl.allow(
    roles.USER,
    [
      resources.USER
    ],
    Object.values(actions.OWN)
  ))

  // Admin (can create, update, delete and read all users)
  userPermissions.push(acl.allow(
    roles.ADMIN,
    [
      resources.USER,
    ],
    Object.values(actions.ALL)
  ))

  return userPermissions
}
