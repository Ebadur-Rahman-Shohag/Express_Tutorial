const express = require("express");
let { people } = require("../data");

const router = express.Router();

// get request
router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

// post request
router.post("/postman", (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: "please provide name value" });
    }
    res.status(201).json({ success: true, data: [...people, name] });
});

// put request
router.put("/:id", (req, res) => {
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

// delete request
router.delete("/:id", (req, res) => {
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

module.exports = router;
