export const actions = {
	// Resources acessible to all (e. g. Blog posts)
	ALL: {
		READ: 'all.read',
		READ_DETAIL: 'all.read_detail',
		CREATE: 'all.create',
		UPDATE: 'all.update',
		DELETE: 'all.delete',
	},
	// Resources that the user owns (e. g. Profile, Orders)
	OWN: {
		READ: 'own.read',
		CREATE: 'own.create',
		UPDATE: 'own.update',
		DELETE: 'own.delete',
	},
}
