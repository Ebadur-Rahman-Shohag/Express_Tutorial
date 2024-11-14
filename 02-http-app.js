const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);

    //home page
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.end();
    }

    //about page
    else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h2>This is our about page...</h2>");
        res.end();
    }

    //styles
    else if (req.url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeStyles);
        res.end();
    }
    //logo
    else if (req.url === "/logo.svg") {
        res.writeHead(200, { "content-type": "image/svg+xml" });
        res.write(homeLogo);
        res.end();
    }
    else if (req.url === "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(homeLogic);
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
