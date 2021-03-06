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

exports.getFollow = async (req, res) => {
  const data = {
    vacationId: req.body.vac,
    userId: req.body.user
  }
  let ans = await Follow.checkFollow(data)
  if (ans.isExist.length !== 0) {
    res.send({message: "done", res: ans})
  }

}

exports.getVacations = async (req, res) => {
    const vacList = await Vacations.getAllVacs()
    const userList = await Vacation.getUserVacs(req.query.user)
    const ans = {vacList, userList}
    res.send(ans)
    }

exports.delVacation = async (req, res) => {
  let ans = await Vacations.delVacation(req.body.vacationId)
  res.send(ans)
}

exports.updateVacation = async (req, res) => {
  let ans = await Vacations.updateVacation(req.body.vac)
  res.send(ans)
}

exports.addVacation = async (req, res) => {
  let ans =  await Vacations.addVacation(req.body.title, req.body.country, req.body.start_date, req.body.price, req.body.end_date)
  res.send(ans)
}

exports.getChart = async (req, res) => {
  let ans =  await Follow.getChart()
  res.send(ans)
}