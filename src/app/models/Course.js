const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')



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

//add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete,{ 
  deletedAt:true,
  overrideMethods: 'all' })

module.exports = mongoose.model("Course", Course);
