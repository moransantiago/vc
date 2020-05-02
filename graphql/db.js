'use strict'

const { MongoClient } = require('mongodb')
const { config } = require('../config')

const USERNAME = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const mongoUrl = `mongodb://${USERNAME}:${PASSWORD}@${config.dbHost}:${config.dbPort}/?authSource=admin`

let connection

const connectDB = async () => {
    if (connection) {
        console.log('Already connected')
        return connection
    }

    try {
        const client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const connection = client.db(config.dbName)

        return connection
    } catch (error) {
        console.log('Could not connect to db', mongoUrl, error)
        process.exit(1)
    }
}

module.exports = connectDB;