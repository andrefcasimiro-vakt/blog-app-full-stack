import generic from './i18n.lib.generic'
import fallback from './i18n.lib.fallback'
import buttons from './i18n.lib.buttons'
import tables from './i18n.lib.tables'
import forms from './i18n.lib.forms'
import users from './i18n.lib.users'
import blog from './i18n.lib.blog'
import userAvatarOptions from './i18n.lib.userAvatarOptions'
import subpages from './i18n.lib.subpages'
import pages from './i18n.lib.pages'
import validators from './i18n.lib.validators'
import errors from './18n.lib.errors'

export type Language = 'en' | 'pt'

const generateTranslation = (language: Language) => ({
	generic: generic(language),
	fallback: fallback(language),
	buttons: buttons(language),
	tables: tables(language),
	forms: forms(language),
	users: users(language),
	blog: blog(language),
	userAvatarOptions: userAvatarOptions(language),
	pages: pages(language),
	subpages: subpages(language),
	validators: validators(language),
	errors: errors(language),
})

export const resources = {
	en: {
		translation: generateTranslation('en'),
	},
	pt: {
		translation: generateTranslation('pt'),
	},
}
