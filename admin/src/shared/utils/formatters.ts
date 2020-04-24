import i18n from 'core/i18n/i18n'

export const formatBool = (bool: boolean): string =>
	bool ? i18n.t('generic.yes') : i18n.t('generic.no')
