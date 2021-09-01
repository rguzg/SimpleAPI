require("dotenv").config();

const express = require("express");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});