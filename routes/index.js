var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ui', function(req, res, next) {
  res.render('ui-components', { title: 'Express' });
});

router.get('/diagram', function(req, res, next) {
  res.render('diagram', { title: 'Express' });
});

module.exports = router;
