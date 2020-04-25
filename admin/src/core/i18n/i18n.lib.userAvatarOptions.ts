import { Language } from './i18n.resources'

const userAvatarOptions = (language: Language) => ({
	logout: { en: 'Logout', pt: 'Terminar sessão' }[language],
})

export default userAvatarOptions
