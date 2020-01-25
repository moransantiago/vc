'use strict'

const mydb = require('./db')
const { ObjectID } = require('mongodb')

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
	}
}
