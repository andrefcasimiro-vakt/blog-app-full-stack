import React from 'react'
import { UserRole } from '../enums/user.enums'
import i18n from 'core/i18n/i18n'
import { Column } from 'material-table'
import { formatUserRole } from '../utils/user.utils.formatters'
import { urls } from 'modules/app/routes/app.urls'
import StyledLink from 'shared/link/link'

export interface UserRow {
	id: number
	username: string
	email: string
	role: UserRole
	lastLoginAt: string
}

export const userColumns: Array<Column<UserRow>> = [
	{
		title: i18n.t('tables.users.columns.id'),
		field: 'id',
		defaultSort: 'desc',
		render: (user: UserRow) => (
			<StyledLink to={`${urls.users}/details/${user.id}`}>{user.id}</StyledLink>
		),
	},
	{
		title: i18n.t('tables.users.columns.username'),
		field: 'username',
	},
	{
		title: i18n.t('tables.users.columns.email'),
		field: 'email',
	},
	{
		title: i18n.t('tables.users.columns.userRole'),
		field: 'role',
		render: (user: UserRow) => formatUserRole(user.role),
	},
	{
		title: i18n.t('tables.users.columns.lastLoginAt'),
		field: 'lastLoginAt',
		type: 'datetime',
	},
]
