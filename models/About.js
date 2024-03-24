const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const virtualId = aboutSchema.virtual("id");
virtualId.get(function () {
  return this._id;
});

aboutSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("About", aboutSchema);
