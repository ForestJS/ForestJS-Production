var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next();
})
app.use(bodyParser.json())



app.listen(3000);


