var express = require('express');
var router = express.Router();

/* GET contact listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { info: 'Email: '});
});

module.exports = router;
