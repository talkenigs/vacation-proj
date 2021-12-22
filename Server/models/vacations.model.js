const sql = require("./db.js");

// constructor
function Vacation(vacation) {
    this.title = vacation.title;
    this.country = vacation.country;
    this.dates = vacation.dates;
    this.price = vacation.price;
    this.image = vacation.image;
  }

  Vacation.getAllVacs = () => {
    let queryAll = `SELECT vacations.vacation_id, title, country, dates, price, image FROM vacations`
    return new Promise((resolve) => {
      sql.query(queryAll, function (err, result) {
        if (err) throw err;
        resolve({ message: "Vacations List", listAll: JSON.parse(JSON.stringify(result))});
      })
    });
  };

  Vacation.getUserVacs = (userId) => {
    let queryUser =  `SELECT vacations.vacation_id FROM vacations 
    INNER JOIN follows ON vacations.vacation_id = follows.vacation_id
    where follows.user_id = (?)`
    return new Promise((resolve) => {
      sql.query(queryUser, [userId], function (err, result) {
        if (err) throw err;
        resolve({ message: "User List", listUser: JSON.parse(JSON.stringify(result))});
      })
    });
  };

  Vacation.delVacation = (vacationId) => {
    let queryDel =  "DELETE FROM vacations WHERE vacation_id = (?);"
    return new Promise((resolve) => {
      sql.query(queryDel, [vacationId], (err, result) => {
        if (err) throw err;
        resolve({message: "Deleted"})
      })
    })}

    Vacation.updateVacation = (id, title, dates, price, country) => {
      let queryPut =  "UPDATE vacations SET title=(?), dates=(?), price=(?), country=(?) WHERE vacation_id = (?);"
      return new Promise((resolve) => {
        sql.query(queryPut, [title, dates, price, country, id], (err, result) => {
          if (err) throw err;
          resolve({message: "updated", result: result})
        })
      })}

      Vacation.addVacation = (title, country, dates, price) => {
        let queryAdd = "INSERT INTO vacations (title, country, dates, price) VALUES ((?),(?),(?),(?));"
        return new Promise((resolve) => {
          sql.query(queryAdd, [title, country, dates, price], (err, result) => {
            if (err) throw err;
            resolve({message: "updated", result: result})
          })
        })}


  module.exports = Vacation