/**
 * Created by Vadym Yatsyuk on 06.08.18
 */
const path = require('path');

// import .env variables
require('dotenv-safe').load({
	path: path.join(__dirname, '../.env'),
	sample: path.join(__dirname, '../.env.example'),
});

module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT
};