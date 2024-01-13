// Create web server
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, this is the homepage!");
});

app.get("/about", (req, res) => {
  res.send("Hello, this is the about page!");
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
