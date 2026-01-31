const characterServices = require("../services/character.services");

async function createCharacter(req, res) {
  try {
    const body = req.body;

    const createdCharacter = await characterServices.createCharacter(body);

    res.status(201).send({ data: createdCharacter });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function updateCharacter(req, res) {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedCharacter = await characterServices.updateCharacter(id, body);

    res.status(200).send({ data: updatedCharacter });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function deleteCharacter(req, res) {
  try {
    const id = req.params.id;

    const deletedCharacter = await characterServices.deleteCharacter(id);

    res.status(200).send({ data: deletedCharacter });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = { createCharacter, updateCharacter, deleteCharacter };
