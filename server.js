require("dotenv").config();

const notfound = require("./middleware/notfound");

const express = require("express");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/helloworld", require("./Routes/helloworld"));
app.use("/anime", require("./Routes/anime"));

app.use(notfound);

module.exports = app;
