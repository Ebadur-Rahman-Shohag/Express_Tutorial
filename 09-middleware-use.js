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
const logger = require("./logger");
const authorize = require("./authorize");

const app = express();

// app.use(logger); //Now logger will work for every route. Because app.use() apply middleware to every route we have in our application
//app.use("/api", logger); //we can set path in the app.use(). Now logger will work for "/api/products" and "/api/items" routes. But this will not work for "/" and "/about" route.
app.use([logger, authorize]); //we can add multiple middleware in app.use() like this



app.get("/", (req, res) => {
    res.send("Home");
});

//In express.js order matters. If we write app.use(logger) after the home route the logger middleware will not work for home route.
//app.use(logger) //logger will not work for the home route.

app.get("/about", (req, res) => {
    // console.log(req.user);
    res.send("About");
});
app.get("/api/products", (req, res) => {
    res.send("Products");
});
app.get("/api/items", (req, res) => {
    res.send("Items");
});

app.listen(5000, () => {
    console.log("server is listening to port 5000");
});