const express = require("express");
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen (port, () => {
  console.log("Listening on http://localhost:"+chalk.green(port));
});
