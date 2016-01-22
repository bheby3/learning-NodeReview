var User = require("./../models/User");

module.exports = {
  //write our CRUD functions here
  create: function (req, res) {
    //2 ways to do it, one using save and one using create
    //using save
    var newUser = new User(req.body);
    newUser.save(function (err, result) {
      //handle errors
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
    //using create
    //creates and saves it at the same time
    // User.create(req.body, function (err, result) {
    //   //handle errors
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
    //     res.send(result);
    //   }
    // });

  },

  read: function (req, res) {
    //use find method
    User.find(req.query, function (err, result) {
      //if there is an error, do this
      if(err) {
        res.status(500).send(err);
      //if it is successful, do this
      } else {
        res.send(result);
      }
    });
  },

  update: function (req, res) {
    //3 parameters: id, the body, and a callback
    User.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  remove: function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  }
};
