const { default: mongoose } = require("mongoose");
const candidate = require("../Model/candidate");
const voter = require("../Model/voter");
const public_voter = require("../Model/public_voter");
const data = require("../Model/data");

const get_all_voter = async (req, res) => {
  try {
    const voters = await voter.find().select("name KPTMYK section voted");
    res.status(200).json(voters);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


//this can use for checking information
const get_one_voter = async (req, res) => {
  try {
    const { id } = req.params;
    const requestedVoter = await voter
      .findOne({ KPTMYK: id })
      .select("name KPTMYK section voted");
    if (!requestedVoter) {
      res.status(400);
      res.json({ error: "Invalid KPTMYK" });
    }
    res.status(200).json(requestedVoter);
  } catch (error) {
    res.status(400);
    res.json({ error: error.message });
  }
};

const add_vote = async (req, res) => {
  let session;
  try {
    const { name, KPTMYK, secret, candidateKPTMYK } = req.body;
    if (!name || !KPTMYK ||  !secret || !candidateKPTMYK) {
      res.status(400);
      res.json({ error: "Incomplete input" });
      return;
    }
    
    const trimmedName = name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "")
      .toLowerCase();

    session = await mongoose.startSession();
    session.startTransaction();

    const requestedVoter = await voter.findOne({ KPTMYK: KPTMYK }).session(session);

    if (!requestedVoter) {
      res.status(400);
      res.json({ error: "Invalid KPTMYK" });
      return;
    }
    if (trimmedName != requestedVoter.name) {
      res.status(400);
      res.json({ error: "You cannot vote. KPTMYK don't match up with name" });
      return;
    }
   if (secret != requestedVoter.secret) {
      res.status(400);
      res.json({ error: "Invalid secret" });
      return;
    }
    const checkedCandidate = await candidate.findOne({KPTMYK: candidateKPTMYK}).session(session);
    const data = await data.findOne({}).session(session)
    if (!data.voteAllow) {
      res.status(400);
      res.json({error: 'Vote is closed'});
      return;
    }
    if ((checkedCandidate.gender === "male" && requestedVoter.maleVoted) || (checkedCandidate.gender === "female" && requestedVoter.femaleVoted) ) {
      res.status(400);
      res.json({ error: "Already voted" });
      return;
    }
    const gender = checkedCandidate.gender + "Voted"

    const result = await candidate.updateOne(
      { KPTMYK: candidateKPTMYK },
      { $push: { voteCount: KPTMYK } }
    ).session(session);
      const resultVoter = await voter.updateOne(
        { KPTMYK: KPTMYK },
        { $set: { [gender]: true } }
      ).session(session);
      await session.commitTransaction();

      res.status(200).json({
        message: "Successfully Voted",
        [gender]: true,
      });
      return;
  } catch (error) {
    session.abortTransaction();

    res.status(400);
    res.json({ error: error.message });
  } finally {
    session.endSession();
  }
};

const add_public_vote = async (req, res) => {
  let session;
  try {
    const { secret, candidateKPTMYK } = req.body;
    if (!secret || !candidateKPTMYK) {
      res.status(400);
      res.json({ error: "Incomplete secret key or Incomplete candidate KPTMYK" });
      return;
    }
    session = await mongoose.startSession();
    session.startTransaction();

    const requestedSecretKey = await public_voter.findOne({ secret: secret }).session(session);

    if (!requestedSecretKey) {
      res.status(400);
      res.json({ error: "Invalid secret key" });
      return;
    }

    const checkedCandidate = await candidate.findOne({KPTMYK: candidateKPTMYK}).session(session);

    if (!checkedCandidate ||!checkedCandidate.canVoteNow) {
      res.status(400);
      res.json({error: 'Candidate not found or vote is closed'});
      return;
    }

    if ((checkedCandidate.gender === "male" && requestedSecretKey.maleVoted) || (checkedCandidate.gender === "female" && requestedSecretKey.femaleVoted) ) {
      res.status(400);
      res.json({ error: "Already voted" });
      return;
    }
    const gender = checkedCandidate.gender + "Voted"
    console.log(gender);
    const result = await candidate.updateOne(
      { KPTMYK: candidateKPTMYK },
      { $push: { voteCount: secret } }
    ).session(session);
      const resultVoter = await public_voter.updateOne(
        { secret: secret },
        { $set: { [gender]: true } }
      ).session(session);
      await session.commitTransaction();

      res.status(200).json({
        message: "Successfully Voted",
        voted: resultVoter.voted,
      });
      return;
  } catch (error) {
    session.abortTransaction();

    res.status(400);
    res.json({ error: error.message });
  } finally {
    session.endSession();
  }

  res.status(200).json({
    message: "added one public vote",
  });
};

const result = async (req,res)=>{
  try {
    const result = await candidate
    //.aggregate([
    //   {
    //     $group: {
    //       _id: "$gender",
    //       candidates: {
    //         $push: {
    //           name: "$name",
    //           KPTMYK: "$KPTMYK",
    //           voteCount: "$voteCount",
    //           imageUrls: "$imageUrls",
    //           gender: "$gender",
    //           totalVotes: { $size: "$voteCount" },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       gender: "$_id",
    //       candidates: {
    //         $slice: ["$candidates", 2], // Limit to the top 2 candidates
    //       },
    //     },
    //   },
    // ])    .exec();

    
  .aggregate([
      {
        $match: { gender: "male" }, // Adjust the field and value based on your data structure
      },
      {
        $project: {
          name: 1,
          KPTMYK: 1,
          voteCount: 1,
          imageUrls:1,
          gender: 1,
          totalVotes: { $size: "$voteCount" },
        },
      },
      { $sort: { totalVotes: -1 } },
      { $limit: 2 },
    ])
    .exec();

    const femaleResult = await candidate
    .aggregate([
      {
        $match: { gender: "female" },
      },
      {
        $project: {
          name: 1,
          voteCount: 1,
          gender: 1,
          totalVotes: { $size: "$voteCount" },
        },
      },
      { $sort: { totalVotes: -1 } },
      { $limit: 2 },
    ])
    .exec(); 

    if(result.length === 0 || femaleResult.length === 0){
    // if(result.length === 0 ){
      res.status(400).json({error: 'No result found'});
      return;
    }
    res.status(200).json({result,femaleResult});
    // res.status(200).json({result});

  } catch (error) {
    res.status(400).json({error: error.message});
  }
}


module.exports = { get_one_voter, get_all_voter, add_vote, add_public_vote,result };


//  All Done