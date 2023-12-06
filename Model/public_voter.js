const mongoose = require("mongoose");

const public_voterSchema = new mongoose.Schema({
  secret: {
    type: String,
    unique: true,
    lowercase: false,
    required: true,
  },
  maleVoted:{
      type:Boolean,
      required:true,
  },  femaleVoted:{
      type:Boolean,
      required:true,
  }
}
);

const public_voter = mongoose.model("public_voter", public_voterSchema);

module.exports = public_voter;
