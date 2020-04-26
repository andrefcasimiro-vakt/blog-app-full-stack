import { Language } from './i18n.resources'

const subpages = (language: Language) => ({
	generic: {
		details: {
			view: { en: 'Details', pt: 'Ver detalhes' }[language],
			update: { en: 'Update', pt: 'Editar' }[language],
			delete: { en: 'Delete', pt: 'Remover' }[language],
		},
	},
})

export default subpages
