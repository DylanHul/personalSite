var express = require('express');
var router = express.Router();

/* GET contact listing. */
router.get('/', function(req, res, next) {
  res.render('link', { about: 'Links: '});
});

module.exports = router;
