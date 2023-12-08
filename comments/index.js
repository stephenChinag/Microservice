const express = require("express");

const bosyParser = require("body-parser");
const app = express();
const { randomBytes } = require("crypto");

app.use(bosyParser.json());

app.get("post/:id/comments", (req, res) => {});
app.post("post/:id/comments");
app.listen(4001, () => {
  console.log("listening Port 4001");
});
