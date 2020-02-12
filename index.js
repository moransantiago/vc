require('dotenv').config()

const { makeExecutableSchema } = require('graphql-tools')
const gqlMiddleware = require('express-graphql')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { join } = require('path')
const { readFileSync } = require('fs')
const cors = require('cors')

const { bindSignalingEvents } = require('./sockets/signaling') // => Function to set the events on the future sockets

const resolvers = require('./graphql/resolvers')

const port = process.env.port || 3333

//  Define initial schema
const typeDefs = readFileSync(
    join(__dirname, './graphql/schema.graphql'),
    'utf-8'
)

const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(cors())

bindSignalingEvents(io.of('/ws/signaling')) // => Create an endpoint where the clients can be connected to perform signaling

app.use('/', express.static(join(__dirname, 'src')))

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

server.listen(port, () => console.log(`Listening http://localhost:${server.address().port}`))
