/**
 * Created by Vadym Yatsyuk on 21.08.18
 */
const APIStrategy = require("ibmcloud-appid").APIStrategy;
const vars = require('./vars');

exports.APP_ID_STRATEGY = new APIStrategy({
	oauthServerUrl: vars.APP_ID.OAUTH_SERVER_URL,
	tenantId: vars.APP_ID.TENTANT_ID,
	clientId: vars.APP_ID.CLIENT_ID
});