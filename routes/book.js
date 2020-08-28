var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/book', function (req, res, next) {
    var books = [
        {
            "id": "1",
            "name": "name 1",
            "image": "http://lorempixel.com/640/480/nature",
            "Price": 55
        },
        {
            "id": "2",
            "name": "name 2",
            "image": "http://lorempixel.com/640/480/nature",
            "Price": 34
        },
        {
            "id": "3",
            "name": "name 3",
            "image": "http://lorempixel.com/640/480/nature",
            "Price": 18
        },
        {
            "id": "4",
            "name": "name 4",
            "image": "http://lorempixel.com/640/480/nightlife",
            "Price": 19
        },
        {
            "id": "5",
            "name": "name 5",
            "image": "http://lorempixel.com/640/480/business",
            "Price": 46
        },
        {
            "id": "6",
            "name": "name 6",
            "image": "http://lorempixel.com/640/480/city",
            "Price": 18
        },
        {
            "id": "7",
            "name": "name 7",
            "image": "http://lorempixel.com/640/480/people",
            "Price": 76
        },
        {
            "id": "8",
            "name": "name 8",
            "image": "http://lorempixel.com/640/480/cats",
            "Price": 44
        },
        {
            "id": "9",
            "name": "name 9",
            "image": "http://lorempixel.com/640/480/abstract",
            "Price": 82
        },
        {
            "id": "10",
            "name": "name 10",
            "image": "http://lorempixel.com/640/480/sports",
            "Price": 13
        },
        {
            "id": "11",
            "name": "name 11",
            "image": "http://lorempixel.com/640/480/cats",
            "Price": 90
        },
        {
            "id": "12",
            "name": "name 12",
            "image": "http://lorempixel.com/640/480/transport",
            "Price": 0
        },
        {
            "id": "13",
            "name": "name 13",
            "image": "http://lorempixel.com/640/480/technics",
            "Price": 70
        },
        {
            "id": "14",
            "name": "name 14",
            "image": "http://lorempixel.com/640/480/cats",
            "Price": 17
        },
        {
            "id": "15",
            "name": "name 15",
            "image": "http://lorempixel.com/640/480/nature",
            "Price": 40
        },
        {
            "id": "16",
            "name": "name 16",
            "image": "http://lorempixel.com/640/480/abstract",
            "Price": 81
        }
    ];
    res.send(books);
});

module.exports = router;