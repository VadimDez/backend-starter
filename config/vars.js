/**
 * Created by Vadym Yatsyuk on 06.08.18
 */
const fs = require('fs');
const path = require('path');

// import .env variables
if (fs.existsSync(path.join(__dirname, "../.env"))) {
  require('dotenv-safe').load({
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example'),
  });
}

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev",
  DISABLE_LOGIN: process.env.DISABLE_LOGIN,
  APP_ID: {
    OAUTH_SERVER_URL: process.env.APP_ID_OAUTH_SERVER_URL,
    TENTANT_ID: process.env.APP_ID_TENTANT_ID,
    CLIENT_ID: process.env.APP_ID_CLIENT_ID
  }
};
