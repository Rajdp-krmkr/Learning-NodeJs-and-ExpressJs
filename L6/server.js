const express = require("express");
const app = express();

const users = []; //created a empty user array

const custom_middleware = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  console.log(`Request from IP: ${ip} - ${new Date().toISOString()}`);
  next();
};

// Middleware to parse JSON data
// app.use(express.json());

app.use(custom_middleware);

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

// POST - Add a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: `name and email are required!` });
  }

  let isEmailExist = users.find((u) => u.email === email);

  const newUser = { id: users.length + 1, name, email };

  if (isEmailExist) {
    console.log(isEmailExist);
    res.status(400).json({ error: "User email already exists!" });
  } else {
    users.push(newUser);
  }

  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) return res.status(400).json({ error: "user not found!" });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
