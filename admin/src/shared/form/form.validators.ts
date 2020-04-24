import * as yup from 'yup'
import i18n from 'core/i18n/i18n'

const translate = (key: string): string => i18n.t(`validators.yup.${key}`)

export const booleanOptional = yup.boolean().nullable()
export const optional = yup.mixed().nullable()

export const stringOptional = yup.string().nullable()

export const stringRequired = stringOptional.required(
	translate('stringRequired'),
)

export const minLengthRequired = (
	length: number,
	fieldName: string = 'Field',
) =>
	yup
		.string()
		.min(
			length,
			translate('minimumLength')
				.replace('{fieldName}', fieldName)
				.replace('{minimumLength}', length.toString()),
		)

/**
 * According to login / register,
 * we want to expose different validation mechanisms
 */
export const password = (
	type: 'login' | 'register',
	fieldName: string = 'Password',
) => {
	const validator = minLengthRequired(8, fieldName).test(
		'is-not-whitespace',
		translate('noEmptyCharacters'),
		(value) => !/\s/.test(value),
	)

	if (type === 'register') {
	}

	return validator
}
