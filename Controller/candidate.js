 


 const get_all_candidates = async(req, res) => {
      res.status(200).json({
        message: "All Candiates",
      });
    }

const get_one_candidate = async (req, res) => {
      const { id } = req.params;

      res.status(200).json({
        message: "Candiate",
        id: id,
      });
    }

    
module.exports = {get_all_candidates, get_one_candidate}