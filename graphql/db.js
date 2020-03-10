'use strict'

const { MongoClient } = require('mongodb')
const { config } = require('../config')

const mongoUrl = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`

const connectDB = async () => {
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