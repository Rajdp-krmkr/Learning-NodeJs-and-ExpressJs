//express middleware
const express = require("express");
const app = express();

// //custom middleware function
// const middleware = (req, res, next) => {
//   console.log("Middleware executed");
//   next(); // Pass control to the next middlware or route handler
// };

// //apply middleware to ALL routes
// app.use(middleware);

//handling requests

const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toTimeString()}] ${req.method} "${req.url}"`);
  next();
};

// Apply middleware to ALL routes
// app.use(requestLogger);
// app.use(express.json());

// // Useful for handling form submissions (x-www-form-urlencoded data)

// app.use(express.urlencoded({ extended: true }));

// This allows you to serve static files like images, CSS, or JavaScript.
app.use(express.static("public"));

app.get("/contact", (req, res) => {
  res.send("Hello, this is contact page!");
});

// app.post("/data", (req, res) => {
//   res.json({
//     receivedData: req.body,
//   });
// });

//define a port to run the server
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});