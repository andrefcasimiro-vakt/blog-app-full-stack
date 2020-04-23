import { UserRole } from '../enums/user.enums'
import i18n from 'core/i18n/i18n'
import { Column } from 'material-table'

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
		type: 'numeric',
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
	},
	{
		title: i18n.t('tables.users.columns.lastLoginAt'),
		field: 'lastLoginAt',
		type: 'datetime',
	},
]
