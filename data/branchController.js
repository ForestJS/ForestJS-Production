const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/ForestJS');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ForestJS');
});

// Schema definition
var branchSchema = new Schema({
  name: String,
  children: Array,
  tags: Array,
  desc: String,
})

let branchController = {}

branchController.findBranch = function (req, res) {
  let branchInfo = req.body
  var Branch = mongoose.model('Branch', branchSchema);
  Branch.findOne({ branchname: req.body.branchname.toLowerCase() }, (err, branch) => {
    if (err || !branch) {
      res.status(200).json("Invalid branchname or password")
    } else {
      // 
      let sendBranchInfo = {
        branchname: branch.branchname,
        id: branch._id,
        avatar: branch.avatar,
        desc: branch.desc,
        collections: branch.collections,
        items: branch.items
      }
      res.status(200).json(sendBranchInfo);
    }
  });
}


branchController.addCollection = function (req, res) {
  var Branch = mongoose.model('Branch', branchSchema);
  let newArray = [];
  Branch.findById(req.body.branchId, (err, branch) => {
    newArray = branch.collections;
    newArray.push(req.body.id);
    branch.collections = newArray;
    branch.save(function(err, updatedBranch){
      res.send(updatedBranch)
    })
  });
}

branchController.addItem = function (req, res) {
  console.log(req.body.id)
  var Branch = mongoose.model('Branch', branchSchema);
  let newArray = [];
  Branch.findById(req.body.branchId, (err, branch) => {
    newArray = branch.items;
    newArray.push(req.body.id);
    branch.items = newArray;
    branch.save(function(err, updatedBranch){
      res.send(updatedBranch)
    })
  });
}



module.exports = branchController;