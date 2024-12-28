const express = require("express");
const app = express();
const { people } = require("./data");

// static assets
app.use(express.static("./methods-public/"));

// parse form data
app.use(express.urlencoded({ extended: false }));

//get method
app.get("/api/people", (req, res) => {
    res.status(200).send(people);
});

//post method
app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})

app.listen(5000, () => {
    console.log("server is listening to port 5000");
});
