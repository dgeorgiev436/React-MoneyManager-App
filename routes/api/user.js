const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const {check, validationResult} = require("express-validator");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

// @route 	POST api/users
// @desc 	Register User
// @access 	Public
router.post("/", [
	check("name", "Name is required").not().isEmpty(),
	check("email", "Please include a valid email").isEmail(),
	check("password", "Please enter a password with 6 or more characters").isLength({min: 6})
], async(req,res) => {
// 	Get all errors from the check
	const errors = validationResult(req);
	
	if(!errors.isEmpty()){
// 		Send status code 400 and an array of errors
		
		return res.status(400).json({errors: errors.array()})
	}
	
	const {name, email, password} = req.body;
	
	try{
// 		Check if user already exists
		
		let user = await User.findOne({email});
		
		if(user){
			return res.status(400).json({errors: [{msg: "User already exists"}]});
		}
		
// 		Encrypt the password with bcrypt
		
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		
// 		Create the user instance
		
		user = new User({
			name,
			email,
			password: hashedPassword
		});
		
// 		Save user
		await user.save();
		
// 		return json web token
		const payload = {
			user: {
				id: user.id
			}
		}
		
		jwt.sign(
			payload,
			config.get("jwtSecret"),
			{expiresIn: 360000},
			(err, token) => {
				if(err) throw err;
				res.json({token})
			});
		
	}catch(err){
		console.error(err.message);
		res.status(500).send("Server error");
	}
});


// @route 	GET api/users
// @desc 	Get current user
// @access 	Public
router.get("/", auth, async(req,res) => {
	
	try{
	
		const user = await User.findById(req.user.id)
		res.json(user)
		
	}catch(err){
		console.error(err.message);
		res.status(500).send("Server error");
	}
})

module.exports = router;
