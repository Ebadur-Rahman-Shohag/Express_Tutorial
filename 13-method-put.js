const express = require("express");
let { people } = require("./data");

const app = express();

// parse json
app.use(express.json())

app.put("/api/people/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
    console.log("Server is listening to port 5000...");
});
