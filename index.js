require("dotenv").config();

const express = require("express");
const app = express();

//Middleware

// Routes

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
