const { response } = require("express");
const User = require("../models/user.model.js");

exports.create = async (req, res) => {

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password
  });

  //check if input missing
  for(i in user){
    if (user[i] == undefined)  {
        res.status(400).send({
          message: "Content can not be empty!", err: true
        });
      };
    }

      const ans = await User.create(user)
      res.send(ans)
    };

exports.login = async (req, res) => {
  const ans = await User.login(req.query.username, req.query.password)
  res.send(ans)
}

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  exports.checkToken = async (req, res) => {
    const ans = await User.checkToken(req.query.token)
    res.send(ans)
  } 
  