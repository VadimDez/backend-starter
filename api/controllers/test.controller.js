/**
 * Created by Vadym Yatsyuk on 13.08.18
 */
const httpStatus = require('http-status');

exports.get = (req, res) => {
	res.status(httpStatus.OK);
	return res.json({ status: 'ok' });
};