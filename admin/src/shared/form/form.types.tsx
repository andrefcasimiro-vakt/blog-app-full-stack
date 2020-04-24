import { SvgIcon } from 'shared/icons/icons.types'
import { SelectOption } from './inputs/inputs.select'

export type Field = React.InputHTMLAttributes<unknown> & {
	icon?: SvgIcon
	label?: string
	tooltip?: string

	/** For dropdowns */
	options?: SelectOption[]
}

export type Form = {
	fields: Array<Array<Field>>
	submitName: string
}

// Typescript helpers to extract
export type ExtractSchemaFields<FormData> = {
	readonly [P in keyof FormData]: string | boolean | number
}
