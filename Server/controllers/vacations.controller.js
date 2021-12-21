const Follow = require("../models/follow.model");
const Vacation = require("../models/vacations.model");
const Vacations = require("../models/vacations.model")

exports.Follow = async (req, res) => {

    const follow = new Follow({  
        vacationId: req.body.vac,
        userId: req.body.user
      });

    let ans = await Follow.checkFollow(follow)
    if (ans.isExist.length === 0) {
      ans = await Follow.createFollow(follow)
      res.send(ans)
    } else {
      ans = await Follow.delFollow(follow)
      res.send(ans)
    }
}

// exports.delFollow = async (req, res) => {
//   res.send({message: "done"})
// }

exports.getVacations = async (req, res) => {
    const vacList = await Vacations.getAllVacs()
    const userList = await Vacation.getUserVacs(req.query.user)
    const ans = {vacList, userList}
    // console.log(ans.userList.listUser[0].vacation_id)
    res.send(ans)
    }

exports.delVacation = async (req, res) => {
  let ans = await Vacations.delVacation(req.body.vacationId)
  res.send(ans)
}

exports.updateVacation = async (req, res) => {
  let ans = await Vacations.updateVacation(req.body.id, req.body.title, req.body.dates, req.body.price, req.body.country)
  res.send(ans)
}