const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  heigh: {
      type: Number,
      required: true,
  },
  weight: {
      type: Number,
      required: true,
      },
  voteCount: {
    type: [string],
  }
},
{timestamps: true});

const candidate = mongoose.model("candidate", candidateSchema);

module.exports = candidate;
