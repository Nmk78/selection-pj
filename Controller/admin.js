const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const admin = require("../Model/admin");
const candidate = require("../Model/candidate");
const voter = require("../Model/voter");
const public_voter = require("../Model/public_voter");
const { default: mongoose } = require("mongoose");
const data = require("../Model/data");
const { result } = require("./voter");

const createToken = (KPTMYK) => {
  const payload = { KPTMYK };
  return jwt.sign(payload, process.env.JWT_secret, { expiresIn: "15d" });
};

const toggle_vote_feature = async (req, res) => {
  try {
    const requestedData = await data.findOne({});
    console.log(requestedData);

    const result = await data.updateOne(
      {},
      { $set: { voteAllow: !requestedData.voteAllow } }
    );
    if (result.modifiedCount == result.matchedCount) {
      console.log(result);
      res.status(200).json({ message: "Vote feature toggled",data:result.acknowledged });
    }
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
};
const toggle_result_feature = async (req, res) => {
  try {
    const requestedData = await data.findOne({});
    console.log(requestedData);

    const result = await data.updateOne(
      {},
      { $set: { resultOpen: !requestedData.resultOpen } }
    );
    if (result.modifiedCount == result.matchedCount) {
      console.log(result.voteAllow, result.resultOpen);
      res.status(200).json({ message: "result feature toggled",data:result.acknowledged });
    }
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
};
const toggle_second_round_feature = async (req, res) => {
  try {
    const requestedData = await data.findOne({});
    console.log(requestedData);

    const result = await data.updateOne(
      {},
      { $set: { secondRound: !requestedData.secondRound } }
    );
    if (result.modifiedCount == result.matchedCount) {
      console.log(result.voteAllow, result.resultOpen, result.secondRound);
      res.status(200).json({ message: "result feature toggled",data:result.acknowledged });
    }
  } catch (error) {
    res.status(400);
    res.json(error.message);
  }
};

const get_all_admin = async (req, res) => {
  try {
    const allAdmins = await admin.find().select("name KPTMYK");

    res.status(200).json(allAdmins);
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const get_one_admin = async (req, res) => {
  try {
    const { id } = req.params;
    const adminById = await admin
      .findOne({ KPTMYK: id })
      .select("name KPTMYK refferalCode");
    if (!adminById) {
      res.status(400);
      res.json({ error: "Invalid KPTMYK" });
    }
    const metaData = await data.findOne({});

    res.status(200).json({adminData: adminById, data: metaData});
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
    return;
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
    return;
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

    //Restarting

const restart = async (req, res) => {
      let session;
      try {
        session = await mongoose.startSession(); 
        session.startTransaction();
    
        const candidateResult = await candidate.deleteMany({}).session(session);
        const voterResults = await voter.deleteMany({}).session(session);
        const publicVoterResults = await public_voter.deleteMany({}).session(session);
    console.log(publicVoterResults);
        if (!candidateResult || !voterResults || !publicVoterResults) {
          res.status(400).json({ error: 'Error deleting data' });
          return;
        }
    
        await session.commitTransaction();
        res.status(200).json({ message: 'Data deleted' });
      } catch (error) {
        await session.abortTransaction();
        res.status(400).json({ error: error.message });
      } finally {
        await session.endSession();
      }
};
    
///Create New Data
const create_new_candidate = async (req, res) => {
  const { KPTMYK, name, height, weight,gender, imageUrls, section, intro, hobbies,profilePic } =
    req.body;
  if (
    !KPTMYK ||
    !name ||
    !section ||
    !intro ||
    !hobbies ||
    !imageUrls ||
    !height ||
    !gender ||
    !weight ||
    !profilePic
  ) {
    res.status(400);
    res.json({ error: "Fill all fields" });
    return;
  }
  try {
    const modifiedGender = gender
    const newCandidate = await candidate.create({
      KPTMYK: KPTMYK,
      name: name,
      section: section,
      intro: intro,
      hobbies: hobbies,
      imageUrls: imageUrls,
      height: height,
      gender:modifiedGender,
      weight: weight,
      voteCount: [],
      canVoteNow: false,
      profilePic: profilePic,
    });
    if (newCandidate) {
      res.status(200).json(newCandidate);
    }
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const add_new_voter = async (req, res) => {
  const { KPTMYK, secret, name, section } = req.body;
  if (!KPTMYK || !name || !section) {
    res.status(400);
    res.json({ error: "Fill all fields" });
    return;
  }
  try {
    const newVoter = await voter.create({
      KPTMYK: KPTMYK,
      secret: secret,
      name: name,
      section: section,
      maleVoted: false,
      femaleVoted: false,
      secondRoundmaleVoted: false,
      secondRoundfemaleVoted: false,
    });
    res.status(200).json(newVoter);
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const add_new_public_voter = async (req, res) => {
  const { secret } = req.body;
  if (!secret) {
    res.status(400);
    res.json({ error: "Fill all fields" });
    return;
  }
  try {
    const newPublic_voter = await public_voter.create({
      secret: secret,
      maleVoted: false,
      femaleVoted: false,
    
    });
    res.status(200).json(newPublic_voter);
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const add_configure_data = async (req, res) => {

  const createdData = await data.findOne({});
  try {
    if(!createdData){
      const createdData = await data.create({
        voteAllow: false,
        resultOpen: false,
      });
    }
    res.status(200).json(createdData);
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};


module.exports = {
  register_new_admin,
  login,
  get_all_admin,
  get_one_admin,
  add_new_voter,
  create_new_candidate,
  add_new_public_voter,
  toggle_vote_feature,
  restart,
  add_configure_data,
  toggle_result_feature,
  toggle_second_round_feature,
};


//  All Done
