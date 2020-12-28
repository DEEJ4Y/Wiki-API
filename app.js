const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = new mongoose.model("Article", articleSchema);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("<h1>We are connected!</h1>");
});

app.get("/articles", function (req, res) {
  Article.find(function (err, articles) {
    if (err) {
      res.send(err);
    } else {
      res.send(articles);
    }
  });
});

app.post("/articles", function (req, res) {
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content,
  });

  newArticle.save(function (err) {
    if (!err) {
      res.send("Successfully uploaded article!");
    } else {
      res.send("Oops! Something went wrong...<br>" + err);
    }
  });
});

app.delete("/articles", function (req, res) {
  Article.deleteMany(function (err) {
    if (!err) {
      res.send("Successfully deleted all articles!");
    } else {
      res.send("Oops! Something went wrong...<br>" + err);
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
