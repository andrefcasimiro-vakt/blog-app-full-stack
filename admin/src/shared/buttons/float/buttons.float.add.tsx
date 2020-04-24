import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import { useHistory, useLocation } from 'react-router'
import useQuery from 'core/router/hooks.useQuery'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		fab: {
			margin: theme.spacing(2),
		},
		button: {
			width: '3rem',
			height: '3rem',
			backgroundColor: 'rgb(220, 0, 78)',
			'&:hover': {
				backgroundColor: 'rgba(220, 0, 78, 0.9)',
			},
			color: theme.palette.common.white,
		},
		absolute: {
			position: 'absolute',
			bottom: theme.spacing(2),
			right: theme.spacing(3),
		},
	}),
)

export interface FloatingButtonProps {
	tooltip?: string
	icon?: React.FC
}

function AddFloatButton({
	tooltip = 'Add',
	icon: Icon = AddIcon,
}: FloatingButtonProps) {
	const classes = useStyles()

	const history = useHistory()
	const location = useLocation()
	const query = useQuery()

	const handleClick = () => {
		const url = `${location.pathname}/create`
		history.push(url)
	}

	return (
		<div>
			<Tooltip title={tooltip} aria-label={tooltip}>
				<Fab className={`${classes.button} `} onClick={handleClick}>
					<Icon />
				</Fab>
			</Tooltip>
		</div>
	)
}

export default AddFloatButton
