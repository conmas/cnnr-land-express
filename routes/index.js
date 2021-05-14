var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello, I\'m Connor Mason' });
});

router.get('/words', function(req, res) {
  res.render('words', { title: 'Words' });
});

router.get('/resume', function(req, res) {
  res.render('resume', { title: 'Resume' });
});

module.exports = router;
