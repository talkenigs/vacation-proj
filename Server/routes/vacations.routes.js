module.exports = app => {
    const Users = require("../controllers/users.controllers");
    const Vacations = require("../controllers/vacations.controller")
  
    // Create a new Customer
    app.post("/create", Users.create);

    app.get("/login", Users.login);

    app.post("/addFollow", Vacations.Follow )

    app.get("/getvacations", Vacations.getVacations)

    app.post("/delVacation", Vacations.delVacation)

    app.put("/updateVacation", Vacations.updateVacation)

    app.post("/addVacation", Vacations.addVacation)

    app.get("/getChart", Vacations.getChart)
  };