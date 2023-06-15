const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  des: { type: String },
  cost: {type:Number},
  image: { type: String },
  slug:{type:String,slug:'name',unique:true} ,
  isDelete: { type: Boolean },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
