import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getUserInfo = gql`
	query getMe {
		getMe {
			_id
			username
		}
	}
`

export const GetUserInfo = ({ children }) => (
	<Query query={getUserInfo} >
		{children}
	</Query>
)
