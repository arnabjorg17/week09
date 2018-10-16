const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => {
  // Fill in your code that:
  // 1. set's the status code to 200
  // 2. and returns an object with the greeting
  var name = req.params.name;
  res.status(200).send({"greeting":greeting(name)});
  // Hint: `req.params.name`
});
module.exports = app;