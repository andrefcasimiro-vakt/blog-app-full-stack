import { Language } from './i18n.resources'

const modals = (language: Language) => ({
	generic: {
		confirmButton: {
			en: 'Confirm',
			pt: 'Confirmar',
		}[language],
		cancelButton: {
			en: 'Cancel',
			pt: 'Cancelar',
		}[language],
	},
	delete: {
		modalTitle: {
			en: 'Delete record',
			pt: 'Remover registo',
		}[language],
		message: {
			en: 'Are you sure you want to remove this record?',
			pt: 'Tem a certeza de que deseja remover este registo?',
		}[language],
	},
})

export default modals
