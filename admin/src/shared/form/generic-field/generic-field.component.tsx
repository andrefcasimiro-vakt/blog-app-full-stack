import React from 'react'
import { Field } from '../form.types'
import { Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import theme from 'modules/app/config/app.theme'
import InputSwitch from '../inputs/inputs.switch'
import InputSelect from '../inputs/inputs.select'

interface Props {
	field: Field
	register: (ref: Element | null) => void
	errors: any
	control: any
	setValue: (name: string, value: any, shouldValidate?: boolean) => void
}

const useStyles = makeStyles({
	grid: {
		display: 'flex',
		flexGrow: 1,
		flexWrap: 'nowrap',
		width: '100%',
	},
	input: {
		display: 'flex',
		flexGrow: 1,
		position: 'relative',
		marginRight: theme.spacing(1),
		marginLeft: theme.spacing(1),
		maxWidth: '18rem',
	},
	helperText: {
		position: 'absolute',
		marginTop: '3rem',
	},
})

function GenericField({ field, register, setValue, control, errors }: Props) {
	const classes = useStyles()

	const firstLetter = field.label?.charAt(0).toUpperCase()
	const formattedLabel = `${firstLetter}${field.label?.slice(1)}`

	// @ts-ignore
	const errorMessage = errors[field.name]?.message

	const { type } = field

	// Toggle
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
							name={field.name || ''}
							defaultChecked={field.defaultChecked}
							tooltip={field.tooltip}
							icon={field.icon}
							setValue={setValue}
						/>
					</Grid>
				}
				name={field.name || ''}
				control={control}
			/>
		)
	}

	// Select
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
							name={field.name || ''}
							options={field.options || []}
							tooltip={field.tooltip}
							icon={field.icon}
							setValue={setValue}
						/>
					</Grid>
				}
				name={field.name || ''}
				control={control}
			/>
		)
	}

	// Base Input
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
		/>
	)

	const { icon: Icon } = field
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

	return <Controller as={Input} name={field.name || ''} control={control} />
}

export default GenericField
