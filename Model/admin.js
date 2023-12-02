const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
  password:{
      type: String,
      required: true,
  },
  refferalCode: {
      type: String,
      required: true,
  }
}
,{timestamps: true});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
