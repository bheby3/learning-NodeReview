//declare dependencies
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
//declare controllers
var userCtrl = require("./controllers/userCtrl");

//initialize app
var app = express();

//if you are hosting html:
//app.use(express.static(__dirname + "./public"))

//set up our connection to mongo (our database)
var mongo_uri = "mongodb://localhost:27017/users";
mongoose.connect(mongo_uri);
mongoose.connection.once("open", function () {
  console.log("we are connected to our database!");
});
//set up middleware
app.use(bodyParser.json());
app.use(cors());

//set up endpoints
app.get("/users", userCtrl.read);
app.post("/users", userCtrl.create);
app.put("/users/:id", userCtrl.update);
app.delete("/users/:id", userCtrl.remove);

//set up a port to listen to
var port = 3000;
app.listen(port, function () {
  console.log("listening on port " + port);
});
