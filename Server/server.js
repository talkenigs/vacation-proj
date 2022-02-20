const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const server = require('http').createServer(app);
const path = require("path");
const { Server, Socket } = require("socket.io");
const { log } = require("console");
require('dotenv').config()

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send
     ({
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occae cati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
  });

  require("./routes/vacations.routes")(app);

  const io = new Server(server, {
    cors: {
      origin: "/",
      methods: ["GET", "POST"],
    },
  });


  io.on('connection', (socket) => { 
    socket.on('update_catalog', (data) => { 
      socket.emit('catalog_update', data)
    });   
  });

  // app.use(express.static(path.join(__dirname,'/build')))
  // app.get('*', async (req, res, next) => {
  //   res.sendFile(path.join(__dirname,'/build'));
  // });

  const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});