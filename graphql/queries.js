'use strict'

const client = require('./mongo')
const { ObjectID } = require('mongodb')
const { config } = require('../config')
const jwt = require('jsonwebtoken')

const errorHandler = require('./errorHandler')

module.exports = {
    getUsers: async () => {
        try {
            const db = await client.connect()
            const users = await db.collection('users').find().toArray()
            
            return users
        } catch (error) {
            errorHandler(error)
        }
    },
    getUser: async (root, { username }, { headers: { authorization } }) => {
        try {
            const user = await jwt.verify(authorization, config.authJwtSecret, async err => {
                if (err) throw new Error('User must be authorized')

                const db = await client.connect()
                const user = await db.collection('users').findOne({ username })
        
                return user
            })
            
            return user
        } catch (error) {
            errorHandler(error)
        }
    },
    filterUsers: async (root, { username }, { headers: { authorization } }) => {
        try {
            const users = await jwt.verify(authorization, config.authJwtSecret, async (err, tokenPayload) => {
                if (err) throw new Error('User must be authorized')

                const db = await client.connect()
                const users = await db.collection('users').find({ $text: { $search: username } }).toArray()
                const filteredUsers = users.filter(user => user.username !== tokenPayload.username) // => Delete the user who made the req from the list in case it matches with the search

                return filteredUsers
            })
            
            return users
        } catch (error) {
            errorHandler(error)
        }
    },
    getMe: async (root, variables, { headers: { authorization } }) => {
        try {
            const user = await jwt.verify(authorization, config.authJwtSecret, async (err, tokenPayload) => {
                if (err) throw new Error('User must be authorized')

                const db = await client.connect()
                const user = await db.collection('users').findOne({ username: tokenPayload.username })
        
                return user
            })
            
            return user
        } catch (error) {
            errorHandler(error)
        }
    },
    getServers: async () => {
        try {
            const db = await client.connect()
            const servers = await db.collection('servers').find().toArray()
            
            return servers
        } catch (error) {
            errorHandler(error)
        }
    },
    getServer: async (root, { id }) => {
        try {
            const db = await client.connect()
            const server = await db.collection('servers').findOne({ _id: ObjectID(id) })
            
            return server
        } catch (error) {
            errorHandler(error)
        }
    },
    searchServer: async (root, { name }, { headers: { authorization } }) => {
        try {
            const servers = await jwt.verify(authorization, config.authJwtSecret, async (err, tokenPayload) => {
                if (err) throw new Error('User must be authorized')

                const db = await client.connect()
                const servers = await db.collection('servers').find({ $text: { $search: name } }).toArray()
                const user = await db.collection('users').findOne({ username: tokenPayload.username })
                const userServersToString = user.servers.map(server => server.toString()) // => Map the servers ids
                const filteredServers = servers.filter(server => !userServersToString.includes((server._id.toString()))) // => Delete the servers that user is already in

                return filteredServers
            })
            
            return servers
        } catch (error) {
            errorHandler(error)
        }
    }
}