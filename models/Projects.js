const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const virtualId = projectsSchema.virtual("id");
virtualId.get(function () {
  return this._id;
});

projectsSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Project", projectsSchema);
