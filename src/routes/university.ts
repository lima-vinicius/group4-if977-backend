var express = require('express');
var router = express.Router();
import university from '../controllers/university';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Let's go everybody this is The SOFTWARE");
});

router.post('/register', university.register);
export default router;
