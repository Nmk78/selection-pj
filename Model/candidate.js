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
  height: {
      type: Number,
      required: true,
  },
  weight: {
      type: Number,
      required: true,
      },
  gender:{
    type: String,
    required: true,
  },
  voteCount: [
    {
      type: String,
      default: 0, // Default value to 0
    },
  ], 
  imageUrls: {
    type: [String],
    required: true,
  }
},
{timestamps: true});
candidateSchema.index({ voteCount: 1 }, { unique: false });
// Recreate non-unique index on voteCount
candidateSchema.index({ voteCount: 1 });

const candidate = mongoose.model("candidate", candidateSchema);

module.exports = candidate;
