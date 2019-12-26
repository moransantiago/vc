const express = require('express')
const app = express()
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'src')))

const server = app.listen(3000, () => console.log(`Listening http://localhost:${server.address().port}`))