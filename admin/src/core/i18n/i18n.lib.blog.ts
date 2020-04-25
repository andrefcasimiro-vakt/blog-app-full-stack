import { Language } from './i18n.resources'

const blog = (language: Language) => ({
	blog: { en: 'Blog', pt: 'Blogue' }[language],
	posts: { en: 'Posts', pt: 'Publicações' }[language],
	categories: { en: 'Categories', pt: 'Categorias' }[language],
	comments: { en: 'Comments', pt: 'Comentários' }[language],
	settings: { en: 'Settings', pt: 'Configurações' }[language],
})

export default blog
