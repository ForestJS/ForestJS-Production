const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/sherpa');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB Sherpa');
});



module.exports = treeController;