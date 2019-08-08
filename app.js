const express = require("express");
const axios = require("axios");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 8080;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server); 


io.on("connection", socket => {
    console.log("user connected v2");
    console.log("el socket es "+console.log(socket));
    socket.on("chat", data => {
        console.log("mensaje recibido ");
        console.log(data)
        socket.emit("chat", "Gracias por decirme "+data);
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

});



server.listen(port, () => console.log(`Listening on port ${port}`));


