var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/chart', function(req, res, next) {
  res.render('chart');
});

router.get('/table', function(req, res, next) {
  res.render('table');
});

module.exports = router;
