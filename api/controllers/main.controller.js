/**
 * Created by Vadym Yatsyuk on 13.08.18
 */
const httpStatus = require('http-status');

exports.health = (req, res) => {
	res.status(httpStatus.OK);
	return res.json({
		status: 'ok'
	});
};

exports.protected = (req, res) => {
	res.status(httpStatus.OK);
	return res.json({
		status: 'protected route: ok'
	});
};