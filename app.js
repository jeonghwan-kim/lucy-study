'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/v1/users', require('./api/v1/user'))
app.use('/v1/images', require('./api/v1/image'))

app.get('/', (req, res) => res.send('Hello world!'));


app.listen(port, () => console.log(`server is running on ${port}`));
