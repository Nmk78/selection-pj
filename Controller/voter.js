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
  const { KPTMYK, name, secret } = req.body;

  if (!KPTMYK || !name || !secret) {
    return res
      .status(400)
      .json({ error: "Fill all fields", message: req.body });
  }
  const trimmedName = name.toLowerCase().trim().replace(/\s+/g, "");

  let KPTMYKWithoutSpaces = KPTMYK.replace(/\s/g, '');

  try {
    const requestedVoter = await voter
      .findOne({ KPTMYK: KPTMYKWithoutSpaces })
      .select("name KPTMYK section secret voted");

    if (!requestedVoter) {
      return res.status(400).json({ error: "Invalid KPTMYK" });
    }

    if (requestedVoter.name.toLowerCase() !== trimmedName || requestedVoter.secret !== secret) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    return res.status(200).json(requestedVoter);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// const add_vote = async (req, res) => {
//   let session;
//   try {
//     const { name, KPTMYK, secret, candidateKPTMYK } = req.body;
//     if (!name || !KPTMYK ||  !secret || !candidateKPTMYK) {
//       res.status(400);
//       res.json({ error: "Incomplete input" });
//       return;
//     }

//     const trimmedName = name
//       .toLowerCase()
//       .trim()
//       .replace(/\s+/g, "")
//       .toLowerCase();

//     session = await mongoose.startSession();
//     session.startTransaction();

//     const requestedVoter = await voter.findOne({ KPTMYK: KPTMYK }).session(session);

//     if (!requestedVoter) {
//       res.status(400);
//       res.json({ error: "Invalid KPTMYK" });
//       return;
//     }
//     if (trimmedName != requestedVoter.name) {
//       res.status(400);
//       res.json({ error: "You cannot vote. KPTMYK don't match up with name" });
//       return;
//     }
//    if (secret != requestedVoter.secret) {
//       res.status(400);
//       res.json({ error: "Invalid secret" });
//       return;
//     }
//     const checkedCandidate = await candidate.findOne({KPTMYK: candidateKPTMYK}).session(session);
//     const requestedData = await data.findOne({}).session(session)
//     if (!requestedData.voteAllow) {
//       res.status(400);
//       res.json({error: 'Vote is closed'});
//       return;
//     }
//     if ((checkedCandidate.gender === "male" && requestedVoter.maleVoted) || (checkedCandidate.gender === "female" && requestedVoter.femaleVoted) ) {
//       res.status(400);
//       res.json({ error: "Already voted" });
//       return;
//     }
//     const gender = checkedCandidate.gender + "Voted"

//     const result = await candidate.updateOne(
//       { KPTMYK: candidateKPTMYK },
//       { $push: { voteCount: KPTMYK } }
//     ).session(session);
//       const resultVoter = await voter.updateOne(
//         { KPTMYK: KPTMYK },
//         { $set: { [gender]: true } }
//       ).session(session);
//       await session.commitTransaction();

//       session.endSession();
//       res.status(200).json({
//         message: "Successfully Voted",
//         [gender]: true,
//       });
//       return;
//   } catch (error) {
//     session.abortTransaction();

//     res.status(400);
//     res.json({ error: error.message });
//   } finally {
//     // session.endSession();
//   }
// };

const add_vote = async (req, res) => {
  let session;

  try {
    const { name, KPTMYK, secret, candidateKPTMYK } = req.body;

    if (!name || !KPTMYK || !secret || !candidateKPTMYK) {
      return res.status(400).json({ error: "Incomplete input" });
    }

    const trimmedName = name.toLowerCase().trim().replace(/\s+/g, "");
    let KPTMYKWithoutSpaces = KPTMYK.replace(/\s/g, '');

    session = await mongoose.startSession();
    session.startTransaction();

    const requestedVoter = await voter.findOne({ KPTMYK: KPTMYKWithoutSpaces }).session(session);

    if (!requestedVoter) {
      return res.status(400).json({ error: "Invalid KPTMYK" });
    }

    if (trimmedName !== requestedVoter.name) {
      return res.status(400).json({ error: "Name does not match KPTMYK" });
    }

    if (secret !== requestedVoter.secret) {
      return res.status(400).json({ error: "Invalid secret" });
    }

    const checkedCandidate = await candidate
      .findOne({ KPTMYK: candidateKPTMYK })
      .session(session);
    const requestedData = await data.findOne({}).session(session);

    if (!requestedData.voteAllow) {
      return res.status(400).json({ error: "Vote is closed" });
    }
    const metaData = await data.findOne({});

    let gender;
    if (metaData.secondRound) {
      gender = "secondRound" + checkedCandidate.gender + "Voted";
    } else {
      gender = checkedCandidate.gender + "Voted";
    }
    if (
      !metaData.secondRound
        ? (checkedCandidate.gender === "male" && requestedVoter.maleVoted) ||
          (checkedCandidate.gender === "female" && requestedVoter.femaleVoted)
        : (checkedCandidate.gender === "male" &&
            requestedVoter.secondRoundmaleVoted) ||
          (checkedCandidate.gender === "female" &&
            requestedVoter.secondRoundfemaleVoted)
    ) {
      return res.status(400).json({ error: "Already voted" });
    }

    const resultCandidate = await candidate
      .updateOne({ KPTMYK: candidateKPTMYK }, { $push: { voteCount: KPTMYK } })
      .session(session);

    const resultVoter = await voter
      .updateOne({ KPTMYK }, { $set: { [gender]: true } })
      .session(session);

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      message: "Successfully Voted",
      [gender]: true,
    });
  } catch (error) {
    session.abortTransaction();
    return res.status(400).json({ error: error.message });
  }
};

const add_public_vote = async (req, res) => {
  let session;
  const { secret, candidateKPTMYK } = req.body;
  if (!secret || !candidateKPTMYK) {
    res.status(400);
    res.json({
      error: "Incomplete secret key or Incomplete candidate KPTMYK",
    });
    return;
  }
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    const requestedData = await data.findOne({}).session(session);

    if (!requestedData.voteAllow) {
      return res.status(400).json({ error: "Vote is closed" });
    }

    const requestedSecretKey = await public_voter
      .findOne({ secret: secret })
      .session(session);

    if (!requestedSecretKey) {
      res.status(400);
      res.json({ error: "Invalid secret key" });
      return;
    }
    const metaData = await data.findOne({});
    if(metaData.secondRound){
      return res.status(400).json({error: "This round was only for student."});
    }
    const checkedCandidate = await candidate
      .findOne({ KPTMYK: candidateKPTMYK })
      .session(session);

    if (!checkedCandidate) {
      res.status(400);
      res.json({ error: "Candidate not found." });
      return;
    }

    if (
      (checkedCandidate.gender === "male" && requestedSecretKey.maleVoted) ||
      (checkedCandidate.gender === "female" && requestedSecretKey.femaleVoted)
    ) {
      res.status(400);
      res.json({ error: "Already voted" });
      return;
    }
    const gender = checkedCandidate.gender + "Voted";

    console.log(gender);
    const result = await candidate
      .updateOne({ KPTMYK: candidateKPTMYK }, { $push: { voteCount: secret } })
      .session(session);
    const resultVoter = await public_voter
      .updateOne({ secret: secret }, { $set: { [gender]: true } })
      .session(session);
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
};

const result = async (req, res) => {
  try {
    const resultOpen = await data.findOne({}).select("resultOpen");
    if (!resultOpen.resultOpen) {
      res.status(400).json({ error: "Result was closed" });
      return;
    }
    // const maleResults = await candidate
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
    const maleResults = await candidate
      .aggregate([
        {
          $match: { gender: "male" }, // Adjust the field and value based on your data structure
        },
        {
          $project: {
            name: 1,
            KPTMYK: 1,
            section: 1,
            intro: 1,
            hobbies: 1,
            height: 1,
            weight: 1,
            voteCount: 1,
            imageUrls: 1,
            profilePic: 1,
            gender: 1,
            totalVotes: { $size: "$voteCount" },
          },
        },
        { $sort: { totalVotes: -1 } },
        { $limit: 2 },
      ])
      .exec();

    const femaleResults = await candidate
      .aggregate([
        {
          $match: { gender: "female" },
        },
        {
          $project: {
            name: 1,
            KPTMYK: 1,
            section: 1,
            intro: 1,
            hobbies: 1,
            height: 1,
            weight: 1,
            voteCount: 1,
            imageUrls: 1,
            profilePic: 1,
            gender: 1,
            totalVotes: { $size: "$voteCount" },
          },
        },
        { $sort: { totalVotes: -1 } },
        { $limit: 2 },
      ])
      .exec();

    if (result.length === 0 || femaleResults.length === 0) {
      res.status(400).json({ error: "No result found" });
      return;
    }
    // maleResults;
    res.status(200).json({ maleResults, femaleResults });
    // res.status(200).json({result});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const pre_ressult = async (req, res) => {
  try {
    const resultOpen = await data.findOne({}).select("resultOpen");
    if (!resultOpen.resultOpen) {
      res.status(400).json({ error: "Result was closed" });
      return;
    }
    const maleResults = await candidate
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
            section: 1,
            intro: 1,
            hobbies: 1,
            height: 1,
            weight: 1,
            voteCount: 1,
            imageUrls: 1,
            gender: 1,
            totalVotes: { $size: "$voteCount" },
          },
        },
        { $sort: { totalVotes: -1 } },
      ])
      .exec();

    const femaleResults = await candidate
      .aggregate([
        {
          $match: { gender: "female" },
        },
        {
          $project: {
            name: 1,
            KPTMYK: 1,
            section: 1,
            intro: 1,
            hobbies: 1,
            height: 1,
            weight: 1,
            voteCount: 1,
            imageUrls: 1,
            gender: 1,
            totalVotes: { $size: "$voteCount" },
          },
        },
        { $sort: { totalVotes: -1 } },
      ])
      .exec();

    if (result.length === 0 || femaleResults.length === 0) {
      res.status(400).json({ error: "No result found" });
      return;
    }
    maleResults;
    res.status(200).json({ maleResults, femaleResults });
    // res.status(200).json({result});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  get_one_voter,
  get_all_voter,
  add_vote,
  add_public_vote,
  pre_ressult,
  result,
};

//  All Done
