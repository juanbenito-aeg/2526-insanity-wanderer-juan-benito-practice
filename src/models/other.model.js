const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Person" },
  title: String,
  fans: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }],
});

const Person = mongoose.model("Person", personSchema);

const Story = mongoose.model("Story", storySchema);

module.exports = { Person, Story };
