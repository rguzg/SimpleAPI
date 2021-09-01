require("dotenv").config();

const notfound = require('./middleware/notfound');

const express = require("express");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes

app.use(notfound);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

exports.default = app;