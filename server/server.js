var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const userController = require('./../data/userController');
const treeController = require('./../data/treeController');
// require in usercont and treecontroller

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next();
})
app.use(bodyParser.json())

app.get('/',(req,res) =>{
    console.log(req.body);
    console.log(treeController.findTrees)
})




app.listen(3000);


