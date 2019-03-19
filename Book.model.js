//(1)first step is to create mongoose schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//(2)this same scheme will be used in MongoDB.
var BookSchema = new Schema({
  title: String,
  author: String,
  category: String
});
//(3)the next step is to export this schema as model
module.exports = mongoose.model('Book',BookSchema);
//the first argument in the function can be named as anything,
//but make sure to use first letter capital as it is a good practice,
//if you dont use it , it wont give you an error but stil...
