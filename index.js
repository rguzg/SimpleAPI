/* 
  dotenv/config must be imported first so that all other imported modules 
  have access to the environment variables

  For more info check out: https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
*/

import "dotenv/config";

const express = require("express");
const app = express();

//Middleware

// Routes

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
