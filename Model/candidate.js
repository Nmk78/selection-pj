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
  section: {
    type: String,
    required: true,
  },
  intro:{
    type: String,
    required: true,
  },
  hobbies:{
    type: [String],
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
      type: String,
  }, 
  imageUrls: {
    type: [String],
    required: true,
  },
  canVoteNow:{
    type: Boolean,
    require: true,
  }
},
{timestamps: true});

const candidate = mongoose.model("candidate", candidateSchema);

module.exports = candidate;
