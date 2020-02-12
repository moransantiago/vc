'use strict'

const mydb = require('./db')
const { ObjectID } = require('mongodb')

const errorHandler = require('./errorHandler')

module.exports = {
    getUsers: async () => {
        try {
            const db = await mydb()
            const users = await db.collection('users').find().toArray()
    
            return users
        } catch (error) {
            errorHandler(error)
        }
    },
    getUser: async (root, { id }) => {
        try {
            const db = await mydb()
            const user = await db.collection('users').findOne({ _id: ObjectID(id) })
    
            return user
        } catch (error) {
            errorHandler(error)
        }
    },
    getServers: async () => {
        try {
            const db = await mydb()
            const servers = await db.collection('servers').find().toArray()
    
            return servers
        } catch (error) {
            errorHandler(error)
        }
    },
    getServer: async (root, { id }) => {
        try {
            const db = await mydb()
            const server = await db.collection('servers').findOne({ _id: ObjectID(id) })
    
            return server
        } catch (error) {
            errorHandler(error)
        }
    }
}