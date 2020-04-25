import { Language } from './i18n.resources'

const fallback = (language: Language) => ({
	unknownData: { en: 'Unknown', pt: 'Desconhecido' }[language],
})

export default fallback
