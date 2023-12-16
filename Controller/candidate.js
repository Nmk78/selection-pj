const candidate = require("../Model/candidate");
const data = require("../Model/data");

const get_all_candidates = async (req, res) => {
  try {
    const candidates = await candidate
      .find()
      .select(
        "KPTMYK name height weight section intro hobbies profilePic imageUrls"
      );
    const metaData = await data.findOne({});

    ////
    if (metaData.secondRound) {
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
          { $limit: 5 },
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
          { $limit: 5 },
        ])
        .exec();

      if (maleResults.length === 0 || femaleResults.length === 0) {
        res.status(400).json({ error: "No result found" });
        return;
      }
      // maleResults;
      // res.status(200).json({ maleResults, femaleResults });
      res
        .status(200)
        .json({
          candidates: [ ...maleResults, ...femaleResults ],
          secondRound: metaData.secondRound,
          result: metaData.resultOpen,
          vote: metaData.voteAllow,
        });
        return
    }

    res
      .status(200)
      .json({
        candidates: candidates,
        result: metaData.resultOpen,
        vote: metaData.voteAllow,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const get_one_candidate = async (req, res) => {
  try {
    const { id } = req.params;
    const requestedCandiate = await candidate
      .find({ KPTMYK: id })
      .select(
        "KPTMYK name height weight section intro hobbies profilePic imageUrls"
      );

    res.status(200).json(requestedCandiate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { get_all_candidates, get_one_candidate };
