const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000

app.use(cors())

app.listen(PORT, () => {
	console.log(`API listening on PORT ${PORT} `)
})

app.get('/livestream', async function (req, res) {
	const { param } = req.query
	const multi =
		'https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&drid='
	const single =
		'https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&ids='
	if (param === 'multi') {
		res.status(200).send({ MultiMatch: multi })
	} else if (param === 'single') {
		res.status(200).send({ SingleMatch: single })
	} else {
		res.send('Invalid request')
	}
})

app.post('/matchid', async function (req, res) {
	const { matchid } = req.query
	//do something
	res.send(
		`https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&ids=${matchid}`
	)
})

app.post('/drid', async function (req, res) {
	const { matchid } = req.query
	//do something
	res.send(
		`https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&drid=${matchid}`
	)
})

// Export the Express API
module.exports = app
