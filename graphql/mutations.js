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
	addFriend: async (root, { userId, friendId }) => {
		try {
			const db = await mydb()
			const existsFriendReq = await db.collection('users').findOne({
				$or: [
					{
						$and: [
							{ _id: ObjectID(userId) },
							{ friendRequests: { $eq: ObjectID(friendId) } }
						]
					},
					{ friends: { $eq: ObjectID(friendId) } }
				]
				// This query will find an object
				// !IF!
				// 1 => The _id is: ObjectID(userId)
				// !AND!
				// 2 => The friends _id wich is an <array>, matches friendId
			})
			// I DELETE THE FRIEND REQ FROM USERID AND ADD IT TO MY FRIENDS, THINK ABOUT ELSE
			if (existsFriendReq) {
				await db
					.collection('users')
					.updateOne(
						{ _id: ObjectID(userId) },
						{ $pull: { friendRequests: ObjectID(friendId) } }
					)
				await db
					.collection('users')
					.updateOne(
						{ _id: ObjectID(friendId) },
						{ $pull: { friendRequests: ObjectID(userId) } }
					)
	
				await db
					.collection('users')
					.updateOne(
						{ _id: ObjectID(userId) },
						{ $addToSet: { friends: ObjectID(friendId) } }
					)
				await db
					.collection('users')
					.updateOne(
						{ _id: ObjectID(friendId) },
						{ $addToSet: { friends: ObjectID(userId) } }
					)
			} else {
				await db
					.collection('users')
					.updateOne(
						{ _id: ObjectID(friendId) },
						{ $addToSet: { friendRequests: ObjectID(userId) } }
					)
			}
	
			return [
				await db.collection('users').findOne({ _id: ObjectID(userId) }),
				await db.collection('users').findOne({ _id: ObjectID(friendId) })
			]
		} catch (error) {
			errorHandler(error)
		}
	},
	logIn: async (root, { username, password }) => {
		try {
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
