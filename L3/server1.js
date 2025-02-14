const http = require("http");

//creating a server
const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "content-type": "text/plain",
  });
  response.end("Hello, welcome to my Node.js server!");
});

//Define a port to run the server
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
