const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/ForestJS');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB ForestJS');
});

let leafController = {};

module.exports = leafController;