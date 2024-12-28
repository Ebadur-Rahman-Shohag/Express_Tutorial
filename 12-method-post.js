// Form Example
const express = require("express");
const { people } = require("./data");

const app = express();

//static assets
app.use(express.static("./methods-public/"));

//parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json())

app.post("/login", (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    } else {
        return res.status(401).send("Please provide the credentials");
    }
});

app.post("/api/postman/people", (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: "please provide name value" });
    }
    res.status(201).json({ success: true, data: [...people, name] });
});

app.listen(5000, () => {
    console.log("Server is listening to port 5000...");
});
