var proxy = require('express-http-proxy');
var app = require('express')();
//fix ssl localhost
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use('/market', proxy('https://localhost:444'));
app.use('/sso', proxy('https://localhost:443'))
app.listen(3000);