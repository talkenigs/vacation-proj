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
                resolve({message: "username taken", err: true})
            }
            else{
                // var queryIns = "INSERT INTO users (first_name, last_name, username, password) VALUES (?,?,?,?)"
                // sql.query(queryIns, [newUser.firstName, newUser.lastName, newUser.username, newUser.password], (err, res) => {
                var queryIns = "select username FROM users"
                sql.query(queryIns, [newUser.firstName, newUser.lastName, newUser.username, newUser.password], (err, res) => {
                    resolve({message: "Added successfully", err: false})
                })
            }
        })
    })
};
 
User.test = (req) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(req.body)
        }, 2000)
    })
}

module.exports = User;
