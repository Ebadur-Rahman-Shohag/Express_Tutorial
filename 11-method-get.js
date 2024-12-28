const express = require("express");
let { people } = require("./data")

const app = express();

app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.listen(5000, () => {
    console.log("Server  is listining to port 5000...");
})