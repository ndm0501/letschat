const express = require("express");
const socketio = require("socket.io");
const http = require("http");

PORT = process.env.PORT || 5000;
const app = express();

const router = require("./router");

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", socket => {
  console.log("We have a new connection!");
  
  socket.on("disconnect", () => {
    console.log("User has left!");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
