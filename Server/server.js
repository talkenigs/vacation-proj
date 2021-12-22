const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const server = require('http').createServer(app);
const { Server, Socket } = require("socket.io");

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send
     ({
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
  });

  require("./routes/vacations.routes")(app);

  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on('connection', (socket) => { 
    socket.on('update_catalog', (data) => { 
      socket.emit('update_catalog', data)
    });   
  });

  

  const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});