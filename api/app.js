'use strict'
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

var allowedOrigins = ['https://example.com']
/* var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Operation not allowed'))
    }
  }
} */

const app = express()

app.get('/livestream', async function (req, res) {
	const { param } = req.query
	const multi =
		'https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&drid='
	const single =
		'https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&matchid='
	if (`${param}` === drid) {
		res.status(200).send({ MultiMatch: multi })
	} else if (param === matchid) {
		res.status(200).send({ SingleMatch: single })
	} else {
		res.send('Invalid request')
	}
})

app.post('/matchid', async function (req, res) {
	const { matchid, drid } = req.body
	//do something
	res.send(
		`https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&drid=${matchid}`
	)
})

app.use(helmet())
/* app.use(cors(corsOptions)); */

module.exports = app
