const { default: mongoose } = require("mongoose");
const candidate = require("../Model/candidate");
const voter = require("../Model/voter");

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
    const { name, KPTMYK, candidateKPTMYK } = req.body;
    if (!name || !KPTMYK || !candidateKPTMYK) {
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
    if (requestedVoter.voted) {
      res.status(400);
      res.json({ error: "Already voted" });
      return;
    }
    const voteWasOpen = await candidate.findOne({KPTMYK: candidateKPTMYK}).session(session);
    if (!voteWasOpen ||!voteWasOpen.canVoteNow) {
      res.status(400);
      res.json({error: 'Candidate not found or vote is closed'});
      return;
    }
    const result = await candidate.updateOne(
      { KPTMYK: candidateKPTMYK },
      { $push: { voteCount: KPTMYK } }
    ).session(session);
      const resultVoter = await voter.updateOne(
        { KPTMYK: KPTMYK },
        { $set: { voted: true } }
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
};

const add_public_vote = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "added one public vote",
  });
};

module.exports = { get_one_voter, get_all_voter, add_vote, add_public_vote };
