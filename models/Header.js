const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  role1: {
    type: String,
    required: true,
  },
  role2: {
    type: String,
    required: true,
  },
  role3: {
    type: String,
    required: true,
  },
  facebook_url: {
    type: String,
    required: true,
  },
  linkedin_url: {
    type: String,
    required: true,
  },
  twitter_url: {
    type: String,
    required: true,
  },
  github_url: {
    type: String,
    required: true,
  },
  mailto_url: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  },
});

const virtualId = headerSchema.virtual("id");
virtualId.get(function () {
  return this._id;
});

headerSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Header", headerSchema);
