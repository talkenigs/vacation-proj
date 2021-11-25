const { response } = require("express");
const User = require("../models/user.model.js");

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      };
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
      });
      const ans = await User.create(user)
      res.send(ans)
      
      // await (User.create(user))
      // .then(res => res.json())
      // .then(res => {
      //   console.log(res)
      // })
      
      
      
      


        // if (err)
        //   res.status(500).send({
        //     message:
        //       err.message || "Some error occurred while creating the user."
        //   }); 
      // };
    };
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

  exports.test = async (req, res) => {
    res.send(await User.test(req))
    // const semak = await User.test(req)
    // res.send(semak)
  } 