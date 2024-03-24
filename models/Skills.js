const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    text: {
      type: String,
      required: true
    },
    bgColor: {
        type: String,
        required: true
    }
});

const virtualId = skillsSchema.virtual("id");
virtualId.get(function () {
  return this._id;
});

skillsSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model('Skill', skillsSchema);