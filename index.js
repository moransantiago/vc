const path = require('path');

const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname + '/static')));

const server = app.listen('3000', () => {
    console.log(`Server listening on http://localhost:${server.address().port}`);
});