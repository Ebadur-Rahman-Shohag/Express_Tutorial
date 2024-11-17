/*
Client Request 
    ↓
Middleware 1 → Logs Request → next()
    ↓
Route Handler → Sends Response
    ↓
Client Receives Response
*/

const express = require("express");

const app = express();

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    next();
};

app.get("/", logger, (req, res) => {
    res.send("Home");
});

app.get("/about", logger, (req, res) => {
    res.send("About");
});

app.listen(5000, () => {
    console.log("server is listening to port 5000");
});
