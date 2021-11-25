const { response } = require("express");
const sql = require("./db.js");

// constructor
function User(user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.username = user.username;
  this.password = user.password;
}

User.create = (newUser) => {
  var query = "SELECT username FROM users WHERE username = (?);";
      return new Promise(resolve => {
        sql.query(query, [newUser.username], function (err, result, fields) {
            if (err) throw err;
            if (result.length > 0) {
                console.log("Unavailable username");
                resolve({length: result.length})
            }
        })
    })
    // else {
      console.log("success");
      // sql.query ("INSERT INTO users (first_name, last_name, username, password) VALUES (?,?,?,?)", [newUser.firstName, newUser.lastName, newUser.username, newUser.password], (err,res) => {
      //     if (err) {
      //         console.log("error accured in sql query", err)
      //     } else {
      //         console.log("values inserted")
      //     }
      // })
    // }
};
 
User.test = (req) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(req.body)
        }, 2000)
    })
}

module.exports = User;
