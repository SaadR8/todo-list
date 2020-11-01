import mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todo = new Schema({
  title: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', todo);