const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const admin = require("../Model/admin");

const createToken = (id) => {
  const payload = { id }; // Assuming _id is the property you want to include in the payload
  return jwt.sign(payload, process.env.JWT_secrect, { expiresIn: "7d" });
};

const get_all_admin = async (req, res) => {
  res.status(200).json({
    message: "All Admins",
  });
};

const get_one_admin = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Admin",
    id: id,
  });
};

//Post Routes

const register_new_admin = async (req, res) => {
  const { id, name, password, refferalCode } = req.body;
  const token = createToken(id);

  if (!name || !id || !refferalCode || !password) {
    res.status(400);
    res.json({error: "Fill all fields"})
  }

  const validReferralCode = await admin.exists({ refferalCode: refferalCode });

  if(!validReferralCode){
    res.status(400);
    res.json({error: "Inavalid Refferal Code"})
  }
  const fiveDigitCode = Math.floor(10000 + Math.random() * 90000);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newAdmin = await admin.create({name: name, password: hashedPassword, KPTMYK: id, refferalCode: fiveDigitCode})
  console.log(newAdmin);
  res.status(200).json({
    name: newAdmin.name,
    KPTMYK: newAdmin.KPTMYK,
    refferalCode: newAdmin.refferalCode,
    token: token,
  });
};
const login = async (req, res) => {
  const { id, password, } = req.body;
  if(!id || !password){
    res.status(400);
    res.json({error: "Fill all fields"})
  }
  const user = await admin.findOne({ KPTMYK: id });
  if(!user){
    res.status(400);
    res.json({error: "Invalid ID"})
  }
  const passwordMatch = await bcrypt.compare(password, user.password);

  if(!passwordMatch){
    res.status(400)
    res.json({error: "Invalid Password"})
  }

  res.status(200)
  res.json({
    name: user.name,
    KPTMYK: user.KPTMYK,
    refferalCode: user.refferalCode,
  })
};

const create_new_candidate = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Admin",
    msg: "added new candidate",
  });
};

const add_new_voter = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Admin",
    msg: "added new Voter",
  });
};

module.exports = {
  register_new_admin,
  login,
  get_all_admin,
  get_one_admin,
  add_new_voter,
  create_new_candidate,
};
