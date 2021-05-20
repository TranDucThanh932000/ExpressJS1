var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
    //get database
    console.log('get')
});



router.post('/create', function (req, res, next) {
    //create new and save to db
    res.send('post')
});

router.put('/update', function (req, res, next) {
    //update and save to db
    res.send('post')
});

router.delete('/delete', function (req, res, next) {
    //delete user from db
    res.send('post')
});

module.exports = router;