/**
 * Created by Vadym Yatsyuk on 21.08.18
 */
const APIStrategy = require("ibmcloud-appid").APIStrategy;
const passport = require('passport');
const {
	env,
	DISABLE_LOGIN
} = require('../../config/vars');


exports.authorize = (env === 'test' || DISABLE_LOGIN == 1) ? (req, res, next) => next() : passport.authenticate(APIStrategy.STRATEGY_NAME, {
	session: false
});