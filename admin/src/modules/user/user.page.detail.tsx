import DetailsSubpage from 'shared/subpage/details.subpage'
import React from 'react'
import UpdateUserForm from './user.form.wrapper.update'
import { User } from './user.types'
import UserDetails from 'modules/user/user.details'
import { urls } from 'modules/routes/routes.constants.urls'
import { useGetUserByUserId } from './user.hooks'

interface Props {}

const UserPageDetail = ({}: Props) => {
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
		/>
	)
}

export default UserPageDetail
