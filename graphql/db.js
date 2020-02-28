'use strict'

const { MongoClient } = require('mongodb')

const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_NAME
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}`

const connectDB = async () => {
    try {
        const client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const connection = client.db(DB_NAME)

        return connection
    } catch (error) {
        console.log('Could not connect to db', mongoUrl, error)
        process.exit(1)
    }
}

module.exports = connectDB;