const express = require('express');
const app = express();

require('./config/express')(app);
require('./config/mongoose');

const {msg} = require('./config/constants');
const {globalHandler} = require('./middlewares');
const {PORT} = require('./config/config');
const routes = require('./config/routes');

app.use(routes);
app.use(globalHandler);

app.listen(PORT, () => console.log(msg.APPLICATION_RUNNING(PORT)));
