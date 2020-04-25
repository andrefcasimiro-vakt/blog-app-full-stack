import { Language } from './i18n.resources'

const generic = (language: Language) => ({
	search: { en: 'Search', pt: 'Pesquisar' }[language],
	back: { en: 'Go back', pt: 'Voltar atrás' }[language],
	yes: { en: 'Yes', pt: 'Sim' }[language],
	no: { en: 'No', pt: 'Não' }[language],
})

export default generic
