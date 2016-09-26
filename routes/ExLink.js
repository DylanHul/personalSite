var express = require('express');
var router = express.Router();

/* GET ExLink listing. */
router.get('/', function(req, res, next) {
  res.render('ExLink', { about: 'Profile: '});
});

module.exports = router;
