 


 const get_all_voter = async(req, res) => {
      res.status(200).json({
        message: "All voters",
      });
    }

const get_one_voter = async (req, res) => {
      const { id } = req.params;

      res.status(200).json({
        message: "voter",
        id: id,
      });
    }

    
module.exports = {get_one_voter, get_all_voter}