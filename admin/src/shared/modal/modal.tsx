import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

interface Props {
	open: boolean
	setOpen: (v: boolean) => void

	title: string
	buttons: React.FC | React.ReactChild | React.ReactNode
	children: React.FC | React.ReactChild | React.ReactNode
}

export default function Modal({
	open,
	setOpen,
	title,
	buttons,
	children,
}: Props) {
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
				<DialogContent>{children}</DialogContent>
				<DialogActions>{buttons}</DialogActions>
			</Dialog>
		</div>
	)
}
