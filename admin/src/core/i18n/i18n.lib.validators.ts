import { Language } from './i18n.resources'

const validators = (language: Language) => ({
	yup: {
		noEmptyCharacters: {
			en: 'Spaces are not allowed',
			pt: 'Espaços em branco não são permitidos',
		}[language],
		stringRequired: {
			en: 'This field is required',
			pt: 'O campo deve estar preenchido',
		}[language],
		invalidEmail: {
			en: 'Must be a correct email address',
			pt: 'Formato de e-mail incorrecto',
		}[language],
		minimumLength: {
			en: '{fieldName} must be at least {minimumLength} characters long',
			pt: '{fieldName} tem de ter no mínimo {minimumLength} carácter(es)',
		}[language],
	},
})

export default validators
