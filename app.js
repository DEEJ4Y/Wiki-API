const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>We are connected!</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
