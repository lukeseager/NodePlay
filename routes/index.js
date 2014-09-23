var express = require('express');
var router = express.Router();
var express = require('express');
var http = require('http');



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My New App' });
});


// Module exports

module.exports = router;
