// gql
const gqlMiddleware = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')

// express
const express = require('express')
const app = express()

// socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server)

// utils
const { join } = require('path')
const { readFileSync } = require('fs')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

// my stuff
const { config } = require('./config')
const { bindSignalingEvents } = require('./utils/sockets/signaling') // Function to set the events on the future sockets
const { bindServerEvents } = require('./utils/sockets/servers') // Function to set the events on the future sockets
const resolvers = require('./graphql/resolvers')

const port = process.env.port || 4000

// Define initial schema
const typeDefs = readFileSync(
	join(__dirname, './graphql/schema.graphql'),
	'utf-8'
)

const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use(morgan('common'))
app.use(cors())
app.use(helmet())

app.use(express.static(join(__dirname, 'frontend/build')))

bindSignalingEvents(io.of('/ws/signaling')) // Create an endpoint where the clients can be connected to perform signaling
bindServerEvents(io.of('/ws/servers')) // Create an endpoint where the clients can be connected to suscribe to server events

app.use(
	'/api',
	gqlMiddleware({
		schema: schema,
		rootValue: resolvers,
		graphiql: true
	})
)

server.listen(port, () => console.log(`Listening ${config.url}`))
