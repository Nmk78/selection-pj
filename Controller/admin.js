const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const admin = require("../Model/admin");
const candidate = require("../Model/candidates");

const createToken = (KPTMYK) => {
  const payload = { KPTMYK }; 
  return jwt.sign(payload, process.env.JWT_secrect, { expiresIn: "7d" });
};

const get_all_admin = async (req, res) => {
  try {
    const allAdmins = await admin.find();

    res.status(200).json({
      allAdmins: allAdmins,
    });
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const get_one_admin = async (req, res) => {
  try {
    const { id } = req.params;
    const adminById = await admin.findOne({KPTMYK: id });

    res.status(200).json({
      name:adminById.name,
      KPTMYK:adminById.KPTMYK,
    });
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

//Post Routes

const register_new_admin = async (req, res) => {
  const { KPTMYK, name, password, refferalCode } = req.body;
  const token = createToken(KPTMYK);

  if (!name || !KPTMYK || !refferalCode || !password) {
    res.status(400);
    res.json({ error: "Fill all fields" });
  }

  try {
    const validReferralCode = await admin.exists({
      refferalCode: refferalCode,
    });

    if (!validReferralCode) {
      res.status(400);
      res.json({ error: "Inavalid Refferal Code" });
    }
    const fiveDigitCode = Math.floor(10000 + Math.random() * 90000);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newAdmin = await admin.create({
      name: name,
      password: hashedPassword,
      KPTMYK: KPTMYK,
      refferalCode: fiveDigitCode,
    });
    console.log(newAdmin);
    res.status(200).json({
      name: newAdmin.name,
      KPTMYK: newAdmin.KPTMYK,
      refferalCode: newAdmin.refferalCode,
      token: token,
    });
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { KPTMYK, password } = req.body;
  if (!KPTMYK || !password) {
    res.status(400);
    res.json({ error: "Fill all fields" });
  }
  try {
    const user = await admin.findOne({ KPTMYK: KPTMYK });
    if (!user) {
      res.status(400);
      res.json({ error: "Invalid KPTMYK" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(400);
      res.json({ error: "Invalid Password" });
    }

    const token = createToken(user.KPTMYK);
    console.log(user);
    res.status(200);
    res.json({
      name: user.name,
      KPTMYK: user.KPTMYK,
      refferalCode: user.refferalCode,
      token: token,
    });
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const create_new_candidate = async (req, res) => {
  const { KPTMYK,name, heigh,weight, imageUrls, section, intro, hobbies } = req.body;

try {
  const newCandidate = await candidate.create({
    KPTMYK: KPTMYK,
    name: name,
    section: section,
    intro: intro,
    hobbies: hobbies,
    imageUrls: imageUrls,
    heigh: heigh,
    weight: weight,
  })
  if(newCandidate){
    res.status(200).json(newCandidate);
  }
} catch (error) {
  res.status(400);
  res.json({ error: error.message });
}
};

const add_new_voter = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Admin",
    msg: "added new Voter",
  });
};

const add_new_public_voter = async (req, res) => {
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
  add_new_public_voter,
};
