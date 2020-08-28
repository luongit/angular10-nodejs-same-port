const express = require('express');
const bodyParser = require("body-parser");
var path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Loại bỏ cros domain cho api khi public ra ngoài
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
});

// Đặt cổng cho server
const port = 3000;
// Khai báo các api demo
app.use('/api', require('./routes/book'));
app.use('/api', require('./routes/category'));

// Load angular tempate và các thư việc đã builde
app.use(express.static(path.join(__dirname, 'dist/nodeAngular')));
app.use('*', express.static(path.join(__dirname, 'dist/nodeAngular')));

// khởi tạo server với cổng đã khai báo
app.listen(port, function () {
    console.log("http://localhost:" + port);
});