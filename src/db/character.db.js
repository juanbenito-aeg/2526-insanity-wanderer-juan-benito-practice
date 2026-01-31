const Character = require("../models/character.model");

async function createCharacter(characterData) {
  const createdCharacter = await Character.create(characterData);

  return createdCharacter;
}

async function updateCharacter(id, changes) {
  // const updatedCharacter = await Character.findByIdAndUpdate(id, changes, {
  //   new: true,
  // });
  const updatedCharacter = await Character.findOneAndUpdate(
    { occupation: { $eq: "gambler" } },
    { $push: { children: { $each: ["Manolo", "José"] } } },
    {
      new: true,
    },
  );

  return updatedCharacter;
}

async function deleteCharacter(id) {
  const deletedCharacter = await Character.findByIdAndDelete(id);

  return deletedCharacter;
}

module.exports = { createCharacter, updateCharacter, deleteCharacter };
