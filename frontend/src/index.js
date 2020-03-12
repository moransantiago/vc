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
	onError: error => { // => Catches the error
		const { graphQLErrors } = error
		if (graphQLErrors && graphQLErrors[0].message === 'User must be authorized') {
			// => In case the jwt expires or is corrupted (not valid), removes it
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
