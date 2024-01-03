const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

const posts = {};

app.get("/post", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, commets: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId } = data;

    const post = posts[postId];
    post.commets.push({ id, content });
  }

  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("Query Is Listening ");
});
