
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);

    //   home page
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>This is our home page...</h1>");
        res.end();
    }
    //about page
    else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h2>This is our about page...</h2>");
        res.end();
    }
    //404 (error page)
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>Page not found...</h1>");
        res.end();
    }
});

server.listen(5000);


