const mongoose = require("mongoose");

const public_voterSchema = new mongoose.Schema({
  secrect: {
    type: String,
    lowercase: false,
    required: true,
  },
}
);

const public_voter = mongoose.model("public_voter", public_voterSchema);

module.exports = public_voter;
