const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/sherpa');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB Sherpa');
});

// place Schemas here
var userSchema = new Schema({
  username: String,
  password: String,
  avatar: String,
  desc: String,
  collections: Array,
  items: Array
})


let userController = {}

userController.findUser = function (req, res) {
  let userInfo = req.body
  var User = mongoose.model('User', userSchema);
  User.findOne({ username: req.body.username.toLowerCase(), password: req.body.password }, (err, user) => {
    if (err || !user) {
      res.status(200).json("Invalid username or password")
    } else {
      let sendUserInfo = {
        username: user.username,
        id: user._id,
        avatar: user.avatar,
        desc: user.desc,
        collections: user.collections,
        items: user.items
      }
      res.status(200).json(sendUserInfo);
    }
  });
}


userController.addCollection = function (req, res) {
  var User = mongoose.model('User', userSchema);
  let newArray = [];
  User.findById(req.body.userId, (err, user) => {
    newArray = user.collections;
    newArray.push(req.body.id);
    user.collections = newArray;
    user.save(function(err, updatedUser){
      res.send(updatedUser)
    })
  });
}

userController.addItem = function (req, res) {
  console.log(req.body.id)
  var User = mongoose.model('User', userSchema);
  let newArray = [];
  User.findById(req.body.userId, (err, user) => {
    newArray = user.items;
    newArray.push(req.body.id);
    user.items = newArray;
    user.save(function(err, updatedUser){
      res.send(updatedUser)
    })
  });
}



module.exports = userController;