const mongoose = require('mongoose');

const achievementsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    company_link: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
});

const virtualId = achievementsSchema.virtual("id");
virtualId.get(function () {
  return this._id;
});

achievementsSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model('Achievement', achievementsSchema);