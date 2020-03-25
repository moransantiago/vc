import React from 'react'

import { AddFriend } from '../../containers/AddFriend'
import { RemoveFriend } from '../../containers/RemoveFriend'

import { Button } from './styles.js'

import { MdPersonAdd } from 'react-icons/md'
import { FaUserAltSlash } from 'react-icons/fa'

export const ToggleFriendButton = ({ isFriend, id }) => (
	<>
        {isFriend
            ? (
                <RemoveFriend>
                    {removeFriend => {
                        const onClick = ({ userId }) => {
                            const variables = { userId }
                            removeFriend({ variables }).catch(err => err)
                        }

                        return (
                            <Button onClick={() => { onClick({ userId: id }) }}>
                                <FaUserAltSlash color='#b7b7b7' size='15px' />
                            </Button>
                        )
                    }}
                </RemoveFriend>

            )
            : (
                <AddFriend>
                    {addFriend => {
                        const onClick = ({ userId }) => {
                            const variables = { userId }
                            addFriend({ variables }).catch(err => err)
                        }

                        return (
                            <Button onClick={() => { onClick({ userId: id }) }}>
                                <MdPersonAdd color='#b7b7b7' size='15px' />
                            </Button>
                        )
                    }}
                </AddFriend>
            )
        }
    </>
)
