var mongoose = require("mongoose");

var addressSchema = mongoose.Schema({
  //enter properties here
  line_1: {type: String, required: true},
  line_2: {type: String, required: false},
  city: {type: String, required: true},
  state: {type: String, required: true},
  country: {type: String, required: true, default: "United States"},
  zip: {type: String, required: true}
});

//export the schema
module.exports = addressSchema;
