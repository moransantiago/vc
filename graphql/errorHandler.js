'use strict'

const errorHandler = err => {
	console.log(err)
	throw new Error(err.message)
}

module.exports = errorHandler
