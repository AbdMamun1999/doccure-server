const express = require("express");
const app = express();
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
