const express = require("express");
const path = require("path");
// console.log(path.resolve(__dirname, "./navbar-app/index.html"));

const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
    res.status(404).send("Oops...There was an error...");
});

app.listen(5000, () => {
    console.log("server is listening to port 5000...");
});
