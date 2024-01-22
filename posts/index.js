const express = require("express");
const bodyParse = require("body-parser");
const { randomBytes } = require("crypto");
const app = express();
const cors = require("cors");
const axios = require("axios");
// kubectl log <pod_name>
app.use(bodyParse.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const title = req.body.title;

  posts[id] = {
    id,
    title,
  };
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });
  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Recived Event ", req.body.type);
  res.send({});
});
app.listen(4000, () => {
  console.log("Listening Post on 4000");
});
