const express = require("express");
const app = express();
const router = require("./router");

// Middleware to parse JSON body
app.use(express.json());

// Use the users router for routes starting with /users
app.use("/", router);

const PORT = 3000;
app.listen(3000, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
