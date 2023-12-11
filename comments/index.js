//PORT LISTENING

const express = require("express");

const bosyParser = require("body-parser");
const app = express();
const { randomBytes } = require("crypto");

app.use(bosyParser.json());

const commentByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const comment = commentByPostId[req.params.id] || [];

  res.status(200).send(comment);
});
app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const content = req.body.content;
  const comments = commentByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentByPostId[req.params.id] = comments;
  res.status(200).send(comments);
});
app.listen(4001, () => {
  console.log("listening Port 4001");
});
