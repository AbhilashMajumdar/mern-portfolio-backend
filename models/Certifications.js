const mongoose = require('mongoose');

const certificationsSchema = new mongoose.Schema({
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
    date: {
      type: String,
      required: true
    }
});

const virtualId = certificationsSchema.virtual("id");
virtualId.get(function () {
  return this._id;
});

certificationsSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model('Certification', certificationsSchema);