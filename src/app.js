const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");
const userrouter = require("./routes/usuario.routes");
const dataroutes = require("./routes/data.routes");
const http = require("http");
const socketIO = require("socket.io");
const socket = require("./sockets/sockets");

const app = express();
app.set("port", process.env.PORT || 3000);

let httpServer = new http.Server(app);
let io = new socketIO.Server(httpServer);

app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());

/* USANDO LAS RUTAS DE los archivos routes */
app.use(userrouter);
app.use(dataroutes);

/* usando los sockets */
io.on('connection', cliente => {
    console.log("cliente conectado");

    socket.desconectar(cliente);
    socket.wsockettemp(cliente, io);
});

module.exports = { app, httpServer };