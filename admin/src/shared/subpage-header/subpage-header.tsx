import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { Typography, Grid } from '@material-ui/core'
import { useHistory } from 'react-router'
import i18n from 'core/i18n/i18n'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
	},
})

interface Props {
	backUrl: string
	title: string
}

function SubpageHeader({ backUrl, title }: Props) {
	const classes = useStyles()
	const theme = useTheme()

	const history = useHistory()

	const handleBack = () => {
		history.push(backUrl)
	}

	return (
		<Grid container className={classes.root}>
			<div>
				<Button size="small" onClick={handleBack} disabled={false}>
					{theme.direction === 'rtl' ? (
						<KeyboardArrowRight />
					) : (
						<KeyboardArrowLeft />
					)}
					{i18n.t('generic.back')}
				</Button>
			</div>
			<Typography color="primary" variant="h6">
				{title}
			</Typography>
		</Grid>
	)
}

export default SubpageHeader
