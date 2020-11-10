var app = require('express')();

app.use('/api/todos',require('./api/todos'));
app.use('/sometest',require('./sometest'));
app.use('/sessions',require('./sessions'));
module.exports = app;