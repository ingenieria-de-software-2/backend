const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");
const userrouter = require("./routes/usuario.routes");
const dataroutes = require("./routes/data.routes");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/* USANDO LAS RUTAS DE los archivos routes */
app.use(userrouter);
app.use(dataroutes);

module.exports = app;

