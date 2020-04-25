if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

if (!process.env.RAPID_API_KEY) { console.log('missing RAPID_API_KEY') }

var express = require('express');
var router = express.Router();
var request = require("request");

var options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/help/countries',
  qs: {format: 'json'},
  headers: {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': process.env.RAPID_API_KEY
  }
};

/* GET countries listing. */
router.get('/', function(req, res, next) {
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  }).pipe(res);
});

module.exports = router;
