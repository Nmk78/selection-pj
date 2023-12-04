const express = require("express");
const {get_all_voter, get_one_voter, add_vote, add_public_vote} = require("../Controller/voter")

const router = express.Router();

// "/voter"
router.
	route("/:id").
		get(get_one_voter)
		
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