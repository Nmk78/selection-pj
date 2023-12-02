const express = require("express");
const { get_one_voter, get_all_voter } = require("../Controller/voter");

const router = express.Router();

// "/candidates"

router.
	route("/").
		get(get_all_voter)

router.
	route("/register").
		get(get_all_voter)

router.
	route("/:id").
		get(get_one_voter)



module.exports = router;