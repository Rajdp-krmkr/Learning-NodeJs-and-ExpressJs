const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to homepage!");
});
app.get("/about", (req, res) => {
  res.send("This is about us page!");
});
app.get("/services", (req, res) => {
  res.send("Our services page!");
});
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.use((req, res) => {
  res.status(404).send("Oops! Page Not Found");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
