var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/search/:name',function(req,res,next){
  res.send(`okay ${req.params.name}`)
})

module.exports = router;
