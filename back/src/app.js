const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const routes = require("./routes/mainRouter");

const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors());

app.use(morgan("dev")); //morgan imprime en consola las peticiones
app.use(express.json()); // permite que express utilice json

app.use("/", routes);

module.exports = app;
