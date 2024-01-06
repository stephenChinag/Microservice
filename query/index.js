const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
app.use(bodyParser.json());

app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }
  if (type === "CommentUpdated") {
    const { id, postId, status, content } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
  console.log(posts);
  res.send({});
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);
});

app.listen(4002, async () => {
  console.log("Query Is Listening @ 4002");

  const res = await axios.get("http://localhost:4005/events");
  if (!res) {
    console.log("An Error Occur");
  } else {
    for (let event of res.data) {
      console.log("Processing event ", event.type);

      handleEvent(event.type, event.data);
    }
  }
});
