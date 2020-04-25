import React, { Component, ErrorInfo } from 'react'
import { SnackbarProvider } from 'notistack'
import ScrollToTop from 'core/router/router.scrollToTop'
import Routes from '../routes/routes'
import ErrorPage from 'shared/error/error.page'

interface Props {}
interface State {
	error: Error | null
}

class App extends Component<Props, State> {
	state = {
		error: null,
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({ error })
	}

	render() {
		const { error } = this.state

		if (error) {
			return <ErrorPage error={error} />
		}

		return (
			<SnackbarProvider maxSnack={3}>
				<ScrollToTop />
				<Routes />
			</SnackbarProvider>
		)
	}
}

export default App
