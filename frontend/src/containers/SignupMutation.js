import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const signUp = gql`
    mutation signUp($input: UserInput!) {
        signUp(input: $input)
    }
`

export const SignupMutation = ({ children }) => (
    <Mutation mutation={signUp}>
        {children}
    </Mutation>
)
