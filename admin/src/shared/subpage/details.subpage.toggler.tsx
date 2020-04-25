import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import i18n from 'core/i18n/i18n'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			paddingTop: theme.spacing(1),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		active: {
			background: theme.palette.grey[100],
		},
	}),
)

interface Props {
	onClick: Function
	mode: 'view' | 'edit'
}

/**
 * Renders the view / update
 */
export default function ButtonsToggleMode({ onClick, mode }: Props) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<ButtonGroup
				variant="outlined"
				color="default"
				aria-label="contained primary button group"
			>
				<Button
					className={mode === 'view' ? classes.active : ''}
					onClick={() => onClick('view')}
				>
					{i18n.t('subpages.generic.details.view')}
				</Button>
				<Button
					className={mode === 'edit' ? classes.active : ''}
					onClick={() => onClick('edit')}
				>
					{i18n.t('subpages.generic.details.update')}
				</Button>
			</ButtonGroup>
		</div>
	)
}
