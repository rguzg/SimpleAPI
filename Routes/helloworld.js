const express = require("express");
const HelloWorld = express.Router();

HelloWorld.get("/", (req, res, next) => {
    return res.status(200).send("Hello World");
});

module.exports = HelloWorld;