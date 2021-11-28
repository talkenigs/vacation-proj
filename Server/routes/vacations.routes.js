module.exports = app => {
    const Users = require("../controllers/vacatoins.controllers");
  
    // Create a new Customer
    app.post("/create", Users.create);

    app.get("/login", Users.login);

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