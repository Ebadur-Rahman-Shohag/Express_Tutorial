// Note: Some methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("This is our home page...");
});

app.get("/about", (req, res) => {
    res.status(200).send("This is our about page...");
});

app.all("*", (req, res) => {
    //Handles all methods (GET, POST, etc.) for any URL not explicitly defined in other routes.
    res.status(404).send("Oops, There is an error...");
});

app.listen(5000, () => {
    console.log("server is listening to port 5000....");
});


