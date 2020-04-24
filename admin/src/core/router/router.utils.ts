/**
 * Extracts an id from a url
 *
 * e. g. localhost:3000/users/16
 */
export const extractIdFromLocation = (pathname: string): number => {
	const locationParameters = pathname.split('/')
	const userId = locationParameters[locationParameters.length - 1]

	return parseInt(userId)
}
