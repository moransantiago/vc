import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Context from './Context'

import { App } from './App'

const client = new ApolloClient({
	uri: 'http://localhost:3333/api',
	request: operation => {// <-- Set the token into the headers of each GraphQL request
		const token = window.sessionStorage.getItem('token')
		const authorization = token ? token : ''
		operation.setContext({
			headers: {
				authorization
			}
		})
	},
	onError: error => {
		const { networkError } = error
		if (networkError && networkError.result.code === 'invalid_token') {
			window.sessionStorage.removeItem('token')
			window.location.href = '/'
		}
	}
})

ReactDOM.render(
	<Context.Provider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Context.Provider>,
	document.getElementById('app')
)
