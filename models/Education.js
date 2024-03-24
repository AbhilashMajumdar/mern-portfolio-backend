const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const virtualId = educationSchema.virtual("id");
virtualId.get(function () {
  return this._id;
});

educationSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Education", educationSchema);
