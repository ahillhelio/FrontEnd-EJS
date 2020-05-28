var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); // THIS IS THE ROUTE HANDLER

router.post ('/', function(req, res, next) {
  res.send ("Saved Successfully");
});



module.exports = router;
//THIS IS THE VIEW ENGINE (for all intents and purposes)