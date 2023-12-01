const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
    set: (value) => value.replace(/\s/g, ''),
  },
  KPTMYK: {
    type: String,
    unique: true,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
}
,{timestamps: true});

const voter = mongoose.model("voter", voterSchema);

module.exports = voter;
