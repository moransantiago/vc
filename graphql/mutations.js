'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const mydb = require('./db')
const { ObjectID } = require('mongodb')

const { config } = require('../config')
const errorHandler = require('./errorHandler')

module.exports = {
	createUser: async (root, { input }) => {
		try {
			const db = await mydb()
			input.password = await bcrypt.hash(input.password, 10)
			const user = await db.collection('users').insertOne(input)
			input._id = user.insertedId
			
			return input
		} catch (error) {
			errorHandler(error)
		}
	},
	editUser: async (root, { id, input }) => {
		try {
			const db = await mydb()
			input.password = await bcrypt.hash(input.password, 10)
			await db
				.collection('users')
				.updateOne({ _id: ObjectID(id) }, { $set: input })
			const student = await db
				.collection('users')
				.findOne({ _id: ObjectID(id) })
			
			return student
		} catch (error) {
			errorHandler(error)
		}
	},
	deleteUser: async (root, { id }) => {
		try {
			const db = await mydb()
			await db.collection('users').deleteOne({ _id: ObjectID(id) })
			
			return id
		} catch (error) {
			errorHandler(error)
		}
	},
	createServer: async (root, { input }) => {
		try {
			const db = await mydb()
			const server = await db.collection('servers').insertOne(input)
			input._id = server.insertedId
			
			return input
		} catch (error) {
			errorHandler(error)
		}
	},
	editServer: async (root, { id, input }) => {
		try {
			const db = await mydb()
			await db
				.collection('servers')
				.updateOne({ _id: ObjectID(id) }, { $set: input })
			const server = await db
				.collection('servers')
				.findOne({ _id: ObjectID(id) })
			
			return server
		} catch (error) {
			errorHandler(error)
		}
	},
	deleteServer: async (root, { id }) => {
		try {
			const db = await mydb()
			await db.collection('servers').deleteOne({ _id: ObjectID(id) })
			
			return id
		} catch (error) {
			errorHandler(error)
		}
	},
	createChat: async (root, { input }) => {
		try {
			const db = await mydb()
			const server = input.server
			delete input.server // => I delete the serverId property because it's not necessary to save it in the db
			const chat = await db.collection('chats').insertOne(input)
			input._id = chat.insertedId

			await db
				.collection('servers')
				.updateOne(
					{ _id: ObjectID(server) },
					{ $addToSet: { chats: input._id } }
				)
			
			return input
		} catch (error) {
			errorHandler(error)
		}
	},
	editChat: async (root, { id, input }) => {
		try {
			const db = await mydb()
			await db
				.collection('chats')
				.updateOne({ _id: ObjectID(id) }, { $set: input })
			const chat = await db
				.collection('chats')
				.findOne({ _id: ObjectID(id) })

			return chat
		} catch (error) {
			errorHandler(error)
		}
	},
	deleteChat: async (root, { id }) => {
		try {
			const db = await mydb()
			const { server } = await db
				.collection('chats')
				.findOne({ _id: ObjectID(id) })
			await db.collection('chats').deleteOne({ _id: ObjectID(id) })
			await db
				.collection('servers')
				.updateOne(
					{ _id: ObjectID(server) },
					{ $pull: { chats: ObjectID(id) } }
				)

			return id
		} catch (error) {
			errorHandler(error)
		}
	},
	createChannel: async (root, { input }) => {
		try {
			const db = await mydb()
			const server = input.server
			delete input.server // => I delete the serverId property because it's not necessary to save it in the db
			const channel = await db.collection('channels').insertOne(input)
			input._id = channel.insertedId

			await db
				.collection('servers')
				.updateOne(
					{ _id: ObjectID(server) },
					{ $addToSet: { channels: input._id } }
				)
			
			return input
		} catch (error) {
			errorHandler(error)
		}
	},
	editChannel: async (root, { id, input }) => {
		try {
			const db = await mydb()
			await db
				.collection('channels')
				.updateOne({ _id: ObjectID(id) }, { $set: input })
			const channel = await db
				.collection('channels')
				.findOne({ _id: ObjectID(id) })

			return channel
		} catch (error) {
			errorHandler(error)
		}
	},
	deleteChannel: async (root, { id }) => {
		try {
			const db = await mydb()
			const { server } = await db
				.collection('channels')
				.findOne({ _id: ObjectID(id) })
			await db.collection('channels').deleteOne({ _id: ObjectID(id) })
			await db
				.collection('servers')
				.updateOne(
					{ _id: ObjectID(server) },
					{ $pull: { channels: ObjectID(id) } }
				)

			return id
		} catch (error) {
			errorHandler(error)
		}
	},
	addUserToServer: async (root, { userId, serverId }) => {
		try {
			const db = await mydb()
			await db
				.collection('servers')
				.updateOne(
					{ _id: ObjectID(serverId) },
					{ $addToSet: { users: ObjectID(userId) } }
				)
			await db
				.collection('users')
				.updateOne(
					{ _id: ObjectID(userId) },
					{ $addToSet: { servers: ObjectID(serverId) } }
				)
	
			const server = await db
				.collection('servers')
				.findOne({ _id: ObjectID(serverId) })

			return server
		} catch (error) {
			errorHandler(error)
		}
	},
	addFriend: async (root, { userId }, { headers: { authorization } }) => {
		try {
			const users = await jwt.verify(authorization, config.authJwtSecret, async (err, { id }) => {
				if (err) throw new Error('User must be authorized')
				
				const db = await mydb()
				const existsFriendReq = await db.collection('users').findOne({
					$and: [
						{ _id: ObjectID(id) },
						{ friendRequests: { $eq: ObjectID(userId) } }
					]
				})
				// I DELETE THE FRIEND REQ FROM USERID AND ADD IT TO MY FRIENDS
				if (existsFriendReq) {
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(id) },
							{ $pull: { friendRequests: ObjectID(userId) } }
						)
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(userId) },
							{ $pull: { friendRequests: ObjectID(id) } }
						)
		
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(id) },
							{ $addToSet: { friends: ObjectID(userId) } }
						)
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(userId) },
							{ $addToSet: { friends: ObjectID(id) } }
						)
				} else {
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(userId) },
							{ $addToSet: { friendRequests: ObjectID(id) } }
						)
				}
		
				return [
					await db.collection('users').findOne({ _id: ObjectID(id) }),
					await db.collection('users').findOne({ _id: ObjectID(userId) })
				]
			})
		
			return users
		} catch (error) {
			errorHandler(error)
		}
	},
	removeFriend: async (root, { userId }, { headers: { authorization } }) => {
		try {
			const users = await jwt.verify(authorization, config.authJwtSecret, async (err, { id }) => {
				if (err) throw new Error('User must be authorized')
				
				const db = await mydb()
				const isAlreadyMyFriend = await db.collection('users').findOne({
					$and: [
						{ _id: ObjectID(id) },
						{ friends: { $eq: ObjectID(userId) } }
					]
				})
				// I THE USER IS ALREADY MY FRIEND DELETE THE USER ID FROM FRIENDS ARRAY AND MY USER ID FROM THE OTHERS ARRAY
				if (isAlreadyMyFriend) {
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(id) },
							{ $pull: { friends: ObjectID(userId) } }
						)
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(userId) },
							{ $pull: { friends: ObjectID(id) } }
						)
				} else { // OR I DELETE THE FRIEND REQ FROM BOTH USERS
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(id) },
							{ $pull: { friendRequests: ObjectID(userId) } }
						)
					await db
						.collection('users')
						.updateOne(
							{ _id: ObjectID(userId) },
							{ $pull: { friendRequests: ObjectID(id) } }
						)
				}
		
				return [
					await db.collection('users').findOne({ _id: ObjectID(id) }),
					await db.collection('users').findOne({ _id: ObjectID(userId) })
				]
			})
		
			return users
		} catch (error) {
			errorHandler(error)
		}
	},
	logIn: async (root, { input: { username, password } }) => {
		try {
			if (!username || !password) {
				throw new Error('Fields must be filled in')
			}

			const db = await mydb()
			const user = await db.collection('users').findOne({ username })

            if (!user) {
				throw new Error('Wrong username or password')
            }

            if (!(await bcrypt.compare(password, user.password))) {
				throw new Error('Wrong username or password')
			}
			
			const payload = { id: user._id, username, email: user.email }
			const token = jwt.sign(payload, config.authJwtSecret, { expiresIn: '15m' })

			return token
		} catch (error) {
			errorHandler(error)
		}
	},
	signUp: async (root, { input }) => {
		try {
			if (!input.username || !input.email || !input.password) {
				throw new Error('Fields must be filled in')
			}

			const db = await mydb()
			const user = await db.collection('users').findOne({ $or: [{ username: input.username }, { email: input.email }] })

            if (user) {
				throw new Error(
					user.username === input.username
						? 'Username is already taken'
						: 'This email is already asociated to an account'
				)
			}

			input.password = await bcrypt.hash(input.password, 10)
			const newUser = await db.collection('users').insertOne(input)
			input._id = newUser.insertedId
			
			const payload = { id: input._id, username: input.username, email: input.email }
			const token = jwt.sign(payload, config.authJwtSecret, { expiresIn: '15m' })

			return token
		} catch (error) {
			errorHandler(error)
		}
	}
}
