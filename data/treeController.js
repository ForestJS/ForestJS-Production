const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/ForestJS');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ForestJS');
});

// Schema definition
var treeSchema = new Schema({
  name: String,
  desc: String,
  children: Array,
  tags: Array,
})

let treeController = {};

treeController.findTrees = function (req, res) {
  // treeQuery is input from tree search
  let treeQuery = req.body.treeQuery;
  console.log('treeQuery in findTrees -->', treeQuery);
  var Tree = mongoose.model('Tree', treeSchema);
  Tree.find({ 'name': {$regex: `.*${treeQuery}*.`}}, (err, trees) => {
    if (err || !trees) {
      res.status(200).json("Invalid treeQuery")
    } else {
      console.log('trees result --> ', trees);
      let sendTreeInfo = {
        treeQuery: treeQuery,
        returnedTrees: trees,
      }
      res.status(200).json(sendTreeInfo);
    }
  });
}


treeController.addCollection = function (req, res) {
  var Tree = mongoose.model('Tree', treeSchema);
  let newArray = [];
  Tree.findById(req.body.treeId, (err, tree) => {
    newArray = tree.collections;
    newArray.push(req.body.id);
    tree.collections = newArray;
    tree.save(function(err, updatedTree){
      res.send(updatedTree)
    })
  });
}

module.exports = treeController;