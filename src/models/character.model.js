const mongoose = require("mongoose");

const pouchSchema = new mongoose.Schema(
  {
    coins: Number,
  },
  { _id: false },
);

const equipmentSchema = new mongoose.Schema(
  {
    instrument: String,
    pouch: pouchSchema,
    weight: Number,
  },
  { _id: false },
);

const characterSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  description: String,
  stamina: Number,
  favourite_drink: String,
  equipment: equipmentSchema,
  children: [String],
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
