const characterDb = require("../db/character.db.js");

async function createCharacter(characterData) {
  const createdCharacter = await characterDb.createCharacter(characterData);

  return createdCharacter;
}

async function updateCharacter(id, changes) {
  const updatedCharacter = await characterDb.updateCharacter(id, changes);

  return updatedCharacter;
}

async function deleteCharacter(id) {
  const deletedCharacter = await characterDb.deleteCharacter(id);

  return deletedCharacter;
}

module.exports = { createCharacter, updateCharacter, deleteCharacter };
