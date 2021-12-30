// const { response } = require("express");
const sql = require("./db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// constructor
function User(user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.username = user.username;
  this.password = user.password;
}

User.create = (newUser) => {
  let query = "SELECT username FROM users WHERE username = (?);";
  return new Promise((resolve) => {
    sql.query(query, [newUser.username], function (err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        resolve({ message: "Username taken", err: true });
      } else {
        let password = bcrypt.hashSync(newUser.password, 8)
        const queryIns = "INSERT INTO users (first_name, last_name, username, password) VALUES ((?),(?),(?),(?))"
        sql.query(queryIns, [newUser.firstName, newUser.lastName, newUser.username, password], (err, res) => {
            resolve({ message: "Added successfully", err: false, id: res.insertId});
          });
      }});
  });
};

User.login = (username, password) => {
  return new Promise((resolve) => {
    var query = "SELECT user_id, username, password, first_name FROM users WHERE username = (?);";
    sql.query(query, [username], function (err, result, fields) {
      if (err) throw err;
      if (result.length == 0) {
        resolve({ message: "username not exist please sign up", err: true });
      } else {
        if (bcrypt.compareSync(password, result[0].password)) {
          var token = jwt.sign({ id: result[0].user_id }, 'shhhhh', {expiresIn: 86400,});
          resolve({ message: 'Welcome Back!', err: false, userId: result[0].user_id, username: result[0].username, token: token});
        }
      }
    });
  });
};

User.checkToken = (token) => {
  return new Promise((resolve) => {
    jwt.verify(token, 'shhhhh', (err, decoded) => {
      if(err) {
        resolve({ message: "error", err: err });
      }
      resolve({ message: "auth", decoded: decoded });
  })
  })
};

module.exports = User;
