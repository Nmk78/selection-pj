const express = require("express");
const {get_all_candidates, get_one_candidate} = require("../Controller/candidate");

const router = express.Router();

// "/candidates"

router.
	route("/").
		get(get_all_candidates)

router.
	route("/:id").
		get(get_one_candidate)



module.exports = router;