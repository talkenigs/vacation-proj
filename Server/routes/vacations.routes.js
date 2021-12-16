module.exports = app => {
    const Users = require("../controllers/users.controllers");
    const Vacations = require("../controllers/vacations.controller")
  
    // Create a new Customer
    app.post("/create", Users.create);

    app.get("/login", Users.login);

    app.post("/addFollow", Vacations.Follow )

    app.post("/delFollow", Vacations.delFollow )

    app.get("/getvacations", Vacations.getVacations)

    // (req, res) => {
    //   let { test } = req.body
    //   res.send({test})
    // });
  
    // Retrieve all Customers
    // app.get("/games", games.findAll);
  
    // Retrieve a single Customer with customerId
    // app.get("/games/:gameid", customers.findOne);
  
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
  
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
  
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
  };