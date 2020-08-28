var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/category', function (req, res, next) {
    res.send('Express category RESTful API');
});

module.exports = router;