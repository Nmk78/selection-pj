const express = require("express");
const {get_all_voter, get_one_voter, add_vote, add_public_vote, result} = require("../Controller/voter")

const router = express.Router();

// "/voter"
router
	.route("/result")
		.get(result)

router.
	route("/:id").
		post(get_one_voter)
		
router.
	route("/").
		get(get_all_voter)

router
	.route("/vote")
		.patch(add_vote)
router
	.route("/public/vote")
		.patch(add_public_vote)





module.exports = router;