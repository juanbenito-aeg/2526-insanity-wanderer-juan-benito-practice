const express = require("express");
const characterControllers = require("../controllers/character.controllers");

const router = express.Router();

router.post("/", characterControllers.createCharacter);
router.patch("/:id", characterControllers.updateCharacter);
router.delete("/:id", characterControllers.deleteCharacter);

module.exports = router;
