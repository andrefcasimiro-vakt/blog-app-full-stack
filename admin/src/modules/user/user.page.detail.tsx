import { useDeleteUser, useGetUserByUserId } from './user.hooks'

import DetailsSubpage from 'shared/subpage/details.subpage'
import React from 'react'
import UpdateUserForm from './user.form.wrapper.update'
import { User } from './user.types'
import UserDetails from 'modules/user/user.details'
import { urls } from 'modules/routes/routes.constants.urls'
import { useHistory } from 'react-router'

interface Props {}

const UserPageDetail = ({}: Props) => {
	const history = useHistory()

	const getTitle = (user: User): string => {
		if (!user) {
			return ''
		}

		return user?.username
	}

	return (
		<DetailsSubpage
			backUrl={urls.users}
			updateDataForm={UpdateUserForm}
			detailsRenderer={UserDetails}
			useQuery={useGetUserByUserId}
			getTitle={getTitle}
			useDeleteMutation={() =>
				useDeleteUser(() => {
					// On delete, redirect to urls.user
					history.push(urls.users)
				})
			}
		/>
	)
}

export default UserPageDetail
