import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import i18n from 'core/i18n/i18n'
import { Switch, CircularProgress } from '@material-ui/core'
import Details, { Detail } from '../../shared/details/details'
import { User } from 'modules/user/user.types'
import { formatUserRole } from 'modules/user/user.utils.formatters'
import { formatBool } from 'shared/utils/formatters'

const useStyles = makeStyles({
	root: {},
})

interface Props {
	data: User
	loading: boolean
}

const translate = (key: string) => i18n.t(`tables.users.columns.${key}`)

/**
 * Wrapper to treat the async preparation of the user details before rendering it to the screen
 */
const UserDetails = ({ data, loading }: Props) => {
	if (loading) {
		return <CircularProgress />
	}

	const userDetails: Detail[] = [
		{
			field: translate('id'),
			value: data.id,
			type: 'text',
		},
		{
			field: translate('username'),
			value: data.username,
			type: 'text',
		},
		{
			field: translate('email'),
			value: data.email,
			type: 'text',
		},
		{
			field: translate('userRole'),
			value: formatUserRole(data.role),
			type: 'text',
		},
		{
			field: translate('isActive'),
			value: formatBool(data.isActive),
			type: 'text',
		},
		{
			field: translate('lastLoginAt'),
			value: data.lastLoginAt,
			type: 'text',
		},
	]

	return <Details data={userDetails} />
}

export default UserDetails
