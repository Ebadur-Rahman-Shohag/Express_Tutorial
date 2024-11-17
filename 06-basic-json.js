const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json(products);
});

app.all("*", (req, res) => {
    res.send("Oops, There is an error...");
});

app.listen(5000, () => {
    console.log("Server is listening to port 5000...");
});