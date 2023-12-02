const express = require("express");
const {get_all_admin, get_one_admin, create_new_candidate, add_new_voter, login, register_new_admin} = require("../Controller/admin");

const router = express.Router();

// 		"/admin/"

router.
	route("/")
		.get(get_all_admin)

router.
	route("/:id").
		get(get_one_admin)

//	Post Routes

router.
	route("/register").
		post(register_new_admin)

router.
	route("/login").
		post(login)

router
	.route("/new/candidate")
		.post(create_new_candidate)

router
      .route("/new/voter")
		.post(add_new_voter)



module.exports = router;