import blog from './i18n.lib.blog'
import buttons from './i18n.lib.buttons'
import errors from './18n.lib.errors'
import fallback from './i18n.lib.fallback'
import forms from './i18n.lib.forms'
import generic from './i18n.lib.generic'
import modals from './i18n.lib.modals'
import pages from './i18n.lib.pages'
import subpages from './i18n.lib.subpages'
import tables from './i18n.lib.tables'
import userAvatarOptions from './i18n.lib.userAvatarOptions'
import users from './i18n.lib.users'
import validators from './i18n.lib.validators'

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
	modals: modals(language),
})

export const resources = {
	en: {
		translation: generateTranslation('en'),
	},
	pt: {
		translation: generateTranslation('pt'),
	},
}
