const sql = require("./db.js");

// constructor
function Follow(follow) {
    this.vacationId = follow.vacationId;
    this.userId = follow.userId;
  }

  Follow.checkFollow = (newFollow) => {
    let queryCheck = "SELECT follow_id FROM follows WHERE user_id = (?) AND vacation_id = (?);";
    return new Promise((resolve) => {
    sql.query(queryCheck, [newFollow.userId, newFollow.vacationId], function (err, result) {
            if (err) return err;
                resolve({message: "Checked if follow exist", isExist: result})
            });
      })};

  Follow.createFollow = (newFollow) => {
    let queryInsert = "INSERT INTO follows (user_id, vacation_id) VALUES (?, ?);";
    return new Promise((resolve) => {
    sql.query(queryInsert, [newFollow.userId, newFollow.vacationId], function (err, result, fields) {
      if (err) throw err;
        resolve({ message: "Inserted", err: false });
  })  
  })};

  Follow.delFollow = (newFollow) => {
    let queryInsert = "DELETE FROM follows WHERE user_id = (?) AND vacation_id = (?);";
    return new Promise((resolve) => {
    sql.query(queryInsert, [newFollow.userId, newFollow.vacationId], function (err, result, fields) {
      if (err) throw err;
        resolve({ message: "Deleted", err: false });
  })  
  })};

  Follow.getChart = () => {
    let queryChart = "select follows.vacation_id, vacations.title, count(user_id) as follows from follows inner join vacations on follows.vacation_id = vacations.vacation_id group by vacation_id"
    return new Promise((resolve) => {
      sql.query(queryChart, (err, result) => {
        if (err) throw err;
        resolve({ message: "done", data: result})
      })
    })}
        

module.exports = Follow
