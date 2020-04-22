import React from 'react'

interface Props {
	error: Error | null
}

const ErrorPage = ({ error }: Props) => {
	const errorName = error?.name
	const errorMessage = error?.message

	return (
		<React.Fragment>
			<h2>Error</h2>
			<p>{errorName}</p>
			<p>{errorMessage}</p>
		</React.Fragment>
	)
}

export default ErrorPage
