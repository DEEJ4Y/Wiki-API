const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articlesSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>We are connected!</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
