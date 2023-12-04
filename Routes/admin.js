const express = require("express");
const {get_all_admin, get_one_admin, create_new_candidate, add_new_voter, login, register_new_admin, add_new_public_voter, toggle_vote_feature} = require("../Controller/admin");
const verifyToken = require("../Middleware/authValidator");

const router = express.Router();

// 		"/admin/"

router.
	route("/register").
		post(register_new_admin)

router.
	route("/login")
		.post(login)


router.use(verifyToken);	//Protect all route below by JWT

router.
	route("/")
		.get(get_all_admin)
router.
	route("/toggle-vote-feature")
		.patch(toggle_vote_feature)

router.
	route("/:id").
		get(get_one_admin)

//	Post Routes
router
	.route("/new/candidate")
		.post(create_new_candidate)

router
      .route("/new/voter")
		.post(add_new_voter)
router
      .route("/new/public-voter")
		.post(add_new_public_voter)



module.exports = router;