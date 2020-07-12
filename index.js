const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(allow(allowedOrigins)); <- should i use this?
//app.use(helmet()); <- should i use this?

app.listen(5000, () => {
  console.log("Server has started on port 5000")
})