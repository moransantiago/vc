const mydb = require('./db')

const errorHandler = require('./errorHandler')

const createIndex = async () => {
    try {
        const db = await mydb()
        await db.collection('servers').createIndex({"$**": "text"})

    } catch (error) {
        errorHandler(error)
    }
}

createIndex()