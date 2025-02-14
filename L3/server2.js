const { prototype } = require("events");
const http = require("http");

//creating the server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the Home page!");
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("This is about us page!");
  } else if (req.url == "/services") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Our Services Page");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 Not found");
  }
});

//define the port
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
