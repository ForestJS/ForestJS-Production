var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const userController = require('./../data/branchController');
const treeController = require('./../data/treeController');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/',(req,res) =>{
    treeController.findTrees(req, res);
});


app.listen(3000);


