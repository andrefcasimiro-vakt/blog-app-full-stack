import React, { Component, ErrorInfo } from 'react'
import ErrorPage from 'modules/error/error.page'
import Content from './app.content'

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

		return <Content />
	}
}

export default App
