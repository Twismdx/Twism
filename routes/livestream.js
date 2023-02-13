//functionality of a route

const livestream = require('express').Router()

livestream.get('/livestream', async function (req, res) {
	const { param } = req.query
	const multi =
		'https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&drid='
	const single =
		'https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&matchid='
	if (param === drid) {
		res.status(200).send({ MultiMatch: multi })
	} else if (param === matchid) {
		res.status(200).send({ SingleMatch: single })
	} else {
		res.send('Invalid request')
	}
})

livestream.post('/matchid', async function (req, res) {
	const { matchid, drid } = req.body
	//do something
	res.send(
		`https://www.poolstat.net.au/livestream/multimatch?key=TUroCx2IxK7p8fZLIK6cS6O~9xritQk~&api=1&drid=${matchid}`
	)
})

module.exports = livestream
