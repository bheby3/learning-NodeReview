var mongoose = require("mongoose");
//import the address schema
var addressSchema = require("./Address");

var userSchema = mongoose.Schema({
  //enter properties here
  username: {type: String, required: true, minlength: 5, maxlength: 20},
  email: {type: String, required: true},
  address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
