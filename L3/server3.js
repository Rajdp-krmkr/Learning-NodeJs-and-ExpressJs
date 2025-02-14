const http = require("http");

//creating a server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, {
      "conten-type": "text/html",
    });
    res.end(`
    <html>
      <head>
        <title>My Node Server</title>
      </head>
      <body>
        <h1>Welcome to My Node.js Server!</h1>
        <p>This is a simple HTML response.</p>
      </body>
    </html>
  `);
  } else if (req.url == "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(`
    <html>
      <head>
        <title>My Node Server/contact</title>
      </head>
      <body>
        <h1>Welcome to about us page!</h1>
        <p>This is a simple HTML response.</p>
      </body>
    </html>
  `);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`<html>
      <head>
        <title>404 Not found</title>
      </head>
      <body>
        <h1>404 Not found</h1>
      </body>
    </html>`);
  }
});

//Define a port
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
