const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./knexfile")
require("dotenv").config();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(allow(allowedOrigins)); <- should i use this?
//app.use(helmet()); <- should i use this?

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});