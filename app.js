var express = require('express');
var app = express();
var zxcvbn = require('zxcvbn');

// Status message
app.get('/', function (req, res) {
  res.send({ status: 'up' });
});

// Check password strength with zxcvbn
app.get('/check', function (req, res) {
  if (req.query.password) {
    res.json(zxcvbn(req.query.password));
  }
  else {
    res.status(400).json({ error: 'No password provided' });
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('pwd-js listening at http:://%s:%s', host, port);
});
