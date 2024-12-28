const express = require("express");

const {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople,
} = require("../controllers/people");

const router = express.Router();

// get request
router.get("/", getPeople);

// post request
router.post("/postman", createPeople);

// put request
router.put("/:id", updatePeople);

// delete request
router.delete("/:id", deletePeople);

// anoter way of settng router
// router.route("/").get(getPeople)
//router.route("/postman").post(createPeople)
// router.route("/:id").put(updatePeople).delete(deletePeople);

module.exports = router;
