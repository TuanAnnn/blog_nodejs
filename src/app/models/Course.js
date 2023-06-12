const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  age: { type: Number },
  isDelete: { type: Boolean },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Course',Course)