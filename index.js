/**
 * Created by Vadym Yatsyuk on 05.08.18
 */
const app = require('./config/express');
const { port } = require('./config/vars');

// listen to requests
app.listen(port , () => console.info(`Server started on port ${ port }`));

module.exports = app;