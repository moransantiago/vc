const client = require('./mongo')

const errorHandler = require('./errorHandler')

const createIndex = async () => {
    try {
        const db = await client.connect()
        await db.collection('servers').createIndex({"$**": "text"})

    } catch (error) {
        errorHandler(error)
    }
}

createIndex()