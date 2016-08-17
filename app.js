const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/echo', (req, res) => {
  res.send(req.query.message);
});

app.get('/', (req, res) => {
  res.send('Hello world' );
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => console.log('server is running on 3000'));
