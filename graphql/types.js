'use strict'

const mydb = require('./db')
const { ObjectID } = require('mongodb')

const errorHandler = require('./errorHandler')

module.exports = {
	User: {
		servers: async ({ servers }) => {
			try {
				const db = await mydb()
				const ids = servers ? servers.map(id => ObjectID(id)) : []
				const serversData =
					ids.length > 0
						? await db
								.collection('servers')
								.find({ _id: { $in: ids } })
								.toArray()
						: []

				return serversData
			} catch (error) {
				errorHandler(error)
			}
		},
		friends: async ({ friends }) => {
			try {
				const db = await mydb()
				const ids = friends ? friends.map(id => ObjectID(id)) : []
				const friendsData =
					ids.length > 0
						? await db
								.collection('users')
								.find({ _id: { $in: ids } })
								.toArray()
						: []

				return friendsData
			} catch (error) {
				errorHandler(error)
			}
		},
		friendRequests: async ({ friendRequests }) => {
			try {
				const db = await mydb()
				const ids = friendRequests ? friendRequests.map(id => ObjectID(id)) : []
				const usersData =
					ids.length > 0
						? await db
								.collection('users')
								.find({ _id: { $in: ids } })
								.toArray()
						: []

				return usersData
			} catch (error) {
				errorHandler(error)
			}
		}
	},
	Server: {
		users: async ({ users }) => {
			try {
				const db = await mydb()
				const ids = users ? users.map(id => ObjectID(id)) : []
				const usersData =
					ids.length > 0
						? await db
								.collection('users')
								.find({ _id: { $in: ids } })
								.toArray()
						: []

				return usersData
			} catch (error) {
				errorHandler(error)
			}
		},
		chats: async ({ chats }) => {
			try {
				const db = await mydb()
				const ids = chats ? chats.map(id => ObjectID(id)) : []
				const chatsData =
					ids.length > 0
						? await db
								.collection('chats')
								.find({ _id: { $in: ids } })
								.toArray()
						: []

				return chatsData
			} catch (error) {
				errorHandler(error)
			}
		},
		channels: async ({ channels }) => {
			try {
				const db = await mydb()
				const ids = channels ? channels.map(id => ObjectID(id)) : []
				const channelsData =
					ids.length > 0
						? await db
								.collection('channels')
								.find({ _id: { $in: ids } })
								.toArray()
						: []

				return channelsData
			} catch (error) {
				errorHandler(error)
			}
		}
	}
}
