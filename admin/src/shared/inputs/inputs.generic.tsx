import { Controller } from 'react-hook-form'
import { Field } from 'shared/form/form.types'
import Grid from '@material-ui/core/Grid'
import InputSelect from './inputs.select'
import InputSwitch from './inputs.switch'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import theme from 'modules/app/app.theme'

interface Props {
	field: Field
	register: (ref: Element | null) => void
	errors: any
	control: any
	getValues: () => any
	setValue: (name: string, value: any, shouldValidate?: boolean) => void
}

const useStyles = makeStyles({
	grid: {
		display: 'flex',
		flexGrow: 1,
		flexWrap: 'nowrap',
	},
	input: {
		display: 'flex',
		flexGrow: 1,
		position: 'relative',
		marginRight: theme.spacing(1),
		marginLeft: theme.spacing(1),
	},
	helperText: {
		position: 'absolute',
		marginTop: '3rem',
	},
	hidden: {
		display: 'none',
	},
})

function GenericField({
	field,
	register,
	setValue,
	getValues,
	control,
	errors,
}: Props) {
	const classes = useStyles()

	const firstLetter = field.label?.charAt(0).toUpperCase()
	const formattedLabel = `${firstLetter}${field.label?.slice(1)}`

	// @ts-ignore
	const errorMessage = errors[field.name]?.message

	const { name, type, icon: Icon, defaultChecked, options, tooltip } = field

	// @ts-ignore
	const defaultValue = getValues()[name]!

	// Is switch?
	if (type === 'switch') {
		return (
			<Controller
				as={
					<Grid
						className={classes.grid}
						container
						spacing={1}
						alignItems="flex-end"
						justify="center"
					>
						<InputSwitch
							label={formattedLabel}
							name={name || ''}
							defaultChecked={
								defaultValue == null ? defaultChecked : defaultValue
							}
							tooltip={tooltip}
							icon={Icon}
							setValue={setValue}
						/>
					</Grid>
				}
				name={name || ''}
				control={control}
			/>
		)
	}

	// Is dropdown?
	if (type === 'select') {
		return (
			<Controller
				as={
					<Grid
						className={classes.grid}
						container
						spacing={1}
						alignItems="flex-end"
						justify="center"
					>
						<InputSelect
							label={formattedLabel}
							name={name || ''}
							options={options || []}
							tooltip={tooltip}
							icon={Icon}
							setValue={setValue}
							defaultOption={defaultValue}
						/>
					</Grid>
				}
				name={name || ''}
				control={control}
			/>
		)
	}

	// Is text input
	const TextInput = (
		<TextField
			id="standard-basic"
			className={classes.input}
			variant="standard"
			label={formattedLabel}
			inputProps={field}
			error={!!errorMessage}
			helperText={errorMessage}
			FormHelperTextProps={{ classes: { root: classes.helperText } }} // <- smth like that
			defaultValue={defaultValue}
		/>
	)

	const Input = Icon ? (
		<Grid
			className={classes.grid}
			container
			spacing={1}
			alignItems="flex-end"
			justify="center"
		>
			<Icon />
			{TextInput}
		</Grid>
	) : (
		TextInput
	)

	return (
		<Controller
			className={field.type === 'hidden' ? classes.hidden : ''}
			as={Input}
			name={name || ''}
			control={control}
		/>
	)
}

export default GenericField
