const express = require("express");
let { people } = require("./data");

const app = express();

app.delete("/api/people/:id", (req, res) => {
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `no person with id ${id}` });
    }

    const newPeople = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
    console.log("Server is listening to port 5000...");
});
