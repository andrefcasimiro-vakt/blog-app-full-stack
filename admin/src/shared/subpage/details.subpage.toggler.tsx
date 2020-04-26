import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import React from 'react'
import { SubpageMode } from './details.subpage.constants'
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
	mode: SubpageMode
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
					className={mode === SubpageMode.VIEW_DETAILS ? classes.active : ''}
					onClick={() => onClick(SubpageMode.VIEW_DETAILS)}
				>
					{i18n.t('subpages.generic.details.view')}
				</Button>
				<Button
					className={mode === SubpageMode.UPDATE_DETAILS ? classes.active : ''}
					onClick={() => onClick(SubpageMode.UPDATE_DETAILS)}
				>
					{i18n.t('subpages.generic.details.update')}
				</Button>
				<Button
					className={mode === SubpageMode.REMOVE_DETAILS ? classes.active : ''}
					onClick={() => onClick(SubpageMode.REMOVE_DETAILS)}
				>
					{i18n.t('subpages.generic.details.delete')}
				</Button>
			</ButtonGroup>
		</div>
	)
}
