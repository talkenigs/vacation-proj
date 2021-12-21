const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

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

  io.on('connection', (socket) => { 
    console.log(socket.id)
    socket.on('message', msg => {
      io.emit('message', msg);
    });
  });

  const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});