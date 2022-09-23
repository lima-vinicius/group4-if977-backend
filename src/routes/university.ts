var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Let's go everybody this is The SOFTWARE");
});

module.exports = router;
