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
  let treeQuery = req.body.toLowerCase();
  var Tree = mongoose.model('Tree', treeSchema);
  Tree.findOne({ 'treeQuery': {$regex: `.*${treeQuery}*.`}}, (err, tree) => {
    if (err || !trees) {
      res.status(200).json("Invalid treeQuery or password")
    } else {
      // 
      let sendTreeInfo = {
        treeQuery: trees.treeQuery,
        id: trees._id,
        avatar: trees.avatar,
        desc: trees.desc,
        collections: trees.collections,
        items: trees.items
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