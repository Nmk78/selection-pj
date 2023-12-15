const candidate = require("../Model/candidate");
const data = require("../Model/data");

const get_all_candidates = async (req, res) => {
  try {
    const candidates = await candidate
      .find()
      .select("KPTMYK name height weight section intro hobbies profilePic imageUrls");
      const requestedData = await data.findOne({});

    res.status(200).json({candidates: candidates, result: requestedData.resultOpen, vote: requestedData.voteAllow });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const get_one_candidate = async (req, res) => {
  try {
    const { id } = req.params;
    const requestedCandiate = await candidate
      .find({ KPTMYK: id })
      .select("KPTMYK name height weight section intro hobbies profilePic imageUrls");

    res.status(200).json(requestedCandiate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { get_all_candidates, get_one_candidate };
