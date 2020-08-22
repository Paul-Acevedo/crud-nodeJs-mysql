const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// create application/json parser
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/imagenes'));

app.listen(3000);