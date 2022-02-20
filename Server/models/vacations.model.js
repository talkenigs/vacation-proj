const sql = require("./db.js");

// constructor
function Vacation(vacation) {
    this.title = vacation.title;
    this.country = vacation.country;
    this.start_date = vacation.start_date;
    this.end = vacation.end;
    this.price = vacation.price;
    this.image = vacation.image;
  }

  Vacation.getAllVacs = () => {
    let queryAll = `SELECT vacations.vacation_id, title, country, start_date, price, end_date FROM vacations`

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

    Vacation.updateVacation = (vac) => {
      let queryPut =  "UPDATE vacations SET title=(?), start_date=(?), price=(?), country=(?), end_date=(?) WHERE vacation_id = (?);"

      return new Promise((resolve) => {
        sql.query(queryPut, [vac.title, vac.start_date, vac.price, vac.country, vac.end_date, vac.id], (err, result) => {
          if (err) throw err;
          resolve({message: "updated", result: result})
        })
      })}

      Vacation.addVacation = (title, country, start_date, price, end_date) => {
        let queryAdd = "INSERT INTO vacations (title, country, start_date, price, end_date) VALUES ((?),(?),(?),(?),(?));"
        return new Promise((resolve) => {
          sql.query(queryAdd, [title, country, start_date, price, end_date], (err, result) => {
            if (err) throw err;
            resolve({message: "updated", result: result})
          })
        })}


  module.exports = Vacation