const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  voteAllow: {
    type: Boolean,
    default: false,
    required: true,
  },
  resultOpen:{
      type:Boolean,
      default:false,
      required:true,
  }
}
);

const data = mongoose.model("data", dataSchema);

module.exports = data;
