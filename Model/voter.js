const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true,
      set: (value) => value.replace(/\s/g, ""),
    },
    KPTMYK: {
      type: String,
      unique: true,
      required: true,
    },
    secret: {
      type: String,
      unique: true,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    maleVoted: {
      type: Boolean,
      required: true,
    },
    femaleVoted: {
      type: Boolean,
      required: true,
    },
    secondRoundmaleVoted: {
      type: Boolean,
      required: true,
    },
    secondRoundfemaleVoted: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const voter = mongoose.model("voter", voterSchema);

module.exports = voter;
