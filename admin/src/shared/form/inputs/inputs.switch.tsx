import React, { useEffect } from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { Tooltip } from '@material-ui/core'

interface Props {
	name: string
	label: string
	defaultChecked?: boolean
	tooltip?: string
	icon?: React.FC
	setValue: (name: string, value: any, shouldValidate?: boolean) => void
}

export default function InputSwitch({
	name,
	label,
	defaultChecked,
	tooltip,
	icon: Icon,
	setValue,
}: Props) {
	const [active, setActive] = React.useState(defaultChecked)

	// On component mount, set the form value to the default value of the switch
	useEffect(() => {
		setValue(name, active)
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setActive(event.target.checked)

		// Update form
		setValue(name, event.target.checked)
	}

	const Label = () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{Icon && <Icon />}
			{Icon && <div style={{ margin: '0 .1rem' }} />}
			{label}
		</div>
	)

	return (
		<Tooltip title={tooltip || ''}>
			<FormControlLabel
				control={
					<Switch
						style={{ padding: '9px' }}
						checked={active}
						onChange={handleChange}
						name={name}
					/>
				}
				label={<Label />}
			/>
		</Tooltip>
	)
}
