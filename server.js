require('dotenv').config(); // bring in .env values

var defaultClient = 'charles';

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var callerId = process.env.TWILIO_CALLER_ID;
var appsId = process.env.TWILIO_APP_ID;

var twilio = require('twilio');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});

app.get('/', function (req, res) {

  var clientName = req.query.client || defaultClient;

  var capability = new twilio.Capability(accountSid, authToken);

  capability.allowClientIncoming(clientName);
  capability.allowClientOutgoing(appsId);

  res.render(__dirname + '/views/index.ejs', {
    token: capability.generate(),
    clientName: clientName
  });

});

app.post('/voice', function (req, res) {

  if (twilio.validateExpressRequest(req, authToken)) {

    var number = req.body.number;

    var response = new twilio.TwimlResponse()
    .dial({ callerId: callerId }, function(node) {
      // check if a real number
      if (/^[\d\+\-\(\) ]+$/.test(number)) {
        node.number(number);
      } else {
        node.client(number);
      }
    });

    res.header('Content-Type', 'text/xml');
    res.send(response.toString()); // send back the TwiML

  } else {
    res.status(403).send('You are not Twilio.');
  }
});
