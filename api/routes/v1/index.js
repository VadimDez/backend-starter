/**
 * Created by Vadym Yatsyuk on 06.08.18
 */
const express = require('express');

const router = express.Router();


router.get('/test', (req, res) => {
	res.status(200).json({
		status: 'ok'
	})
});


module.exports = router;