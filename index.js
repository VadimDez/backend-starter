/**
 * Created by Vadym Yatsyuk on 05.08.18
 */
const app = require('./config/express');
const PORT = 9000;

// listen to requests
app.listen(PORT , () => console.info(`server started on port ${ PORT  }`));