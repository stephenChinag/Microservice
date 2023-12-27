const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

app.get("/post", (req, res) => {});
app.post("/events", (req, res) => {});

app.listen(4002, () => {
  console.log("Query Is Listening ");
});
