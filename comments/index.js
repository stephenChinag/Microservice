//PORT LISTENING

const express = require("express");

const bosyParser = require("body-parser");
const app = express();
const { randomBytes } = require("crypto");
const axios = require("axios");
const cors = require("cors");

app.use(bosyParser.json());
app.use(cors());
const commentByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  const comment = commentByPostId[req.params.id] || [];

  res.send(comment);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });
  res.status(200).send(comments);
});

app.post("/events", (req, res) => {
  console.log("Recived Event ", req.body.type);
  res.send({});
});

app.listen(4001, () => {
  console.log("listening Comment Port 4001");
});
