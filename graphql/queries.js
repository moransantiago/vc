'use strict'

const mydb = require('./db')
const { ObjectID } = require('mongodb')

const errorHandler = require('./errorHandler')

module.exports = {
    getUser: async (root, { id }) => {
        try {
            const db = await mydb()
            const user = await db.collection('users').findOne({ _id: ObjectID(id) })
    
            return user
        } catch (error) {
            errorHandler(error)
        }
    }
}