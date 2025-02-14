const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/contact", (req, res) => {
  res.send(`
    <html>
        <head><title>My Node Server</title></head>
        <body>
            <h1>Welcome to My Node.js Server!</h1>
            <p>This is a simple HTML response.</p>
        </body>
    </html>
    `);
});

app.get("/about", (req, res) => {
  res.json({
    name: "Express.js",
    version: "4.x",
    message: "A Node.js framework",
  });
});

// Handle 404 errors (for undefined routes)
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
