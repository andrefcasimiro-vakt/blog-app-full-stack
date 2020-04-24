import React, { useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Tooltip from '@material-ui/core/Tooltip/Tooltip'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			display: 'flex',
			width: '100%',
			margin: theme.spacing(1),
		},
		icon: {
			paddingTop: theme.spacing(2),
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
		option: {
			display: 'flex',
			padding: theme.spacing(1),
			alignItems: 'center',
			justifyContent: 'flexStart',
		},
		selectContent: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flexStart',
			'& div': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flexStart',
				padding: theme.spacing(1),
			},
		},
	}),
)

export interface SelectOption {
	name: string
	value: string
	icon?: React.FC
}

interface Props {
	options: SelectOption[]
	setValue: (name: string, value: any, shouldValidate?: boolean) => void
	name: string
	label: string
	icon?: React.FC
	tooltip?: string
	defaultOption?: string
}

export default function InputSelect({
	options,
	setValue,
	name,
	label,
	icon: Icon,
	tooltip,
	defaultOption,
}: Props) {
	const classes = useStyles()
	const [selected, setSelected] = React.useState(defaultOption)

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		const value = event.target.value as string
		setSelected(value)

		setValue(name, value)
	}

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			{Icon && (
				<div className={classes.icon}>
					<Icon />
				</div>
			)}
			<Tooltip title={tooltip || ''}>
				<FormControl className={classes.formControl}>
					<InputLabel id={label}>{label}</InputLabel>
					<Select
						labelId={label}
						id={label}
						name={name}
						value={selected}
						onChange={handleChange}
						className={classes.selectContent}
					>
						{options.map((option, index) => {
							const { icon: Icon } = option
							return (
								<MenuItem
									key={index}
									value={option.value}
									className={classes.option}
								>
									{Icon && <Icon />}
									{option.name}
								</MenuItem>
							)
						})}
					</Select>
				</FormControl>
			</Tooltip>
		</div>
	)
}
