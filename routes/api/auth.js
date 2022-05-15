const express = require("express");
const router = express.Router();
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const {check, validationResult} = require("express-validator");


// @route 	POST api/users
// @desc 	Authenticate User & get token
// @access 	Public
router.post("/", [
// 	Validation checks with express-validator
	check("email", "Please include a valid email").isEmail(),
	check("password", "Password is required").exists()
], async(req,res) => {
	
// 	Get all errors that do not pass the check
	
	const errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array()});
	}
	
	const {email,password} = req.body;
	
	try{
		
// 		Check if user exists
		
		let user = await User.findOne({email});
		
		if(!user){
			return res.status(400).json({errors: [{msg: "Invalid Credentials"}]});
		}
// 		Compare entered password with hashed password
		
		const isMatch = await bcrypt.compare(password, user.password);
		
// 		If not match
		if(!isMatch){
			return res.status(400).json({errros: [{msg: "Invalid Credentials"}]});
		}
		
// 		Return json web token
		
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
				res.json(token)
			}
		)
	}catch(err){
		console.error(err.message);
		res.status(500).send("Server error");
	}
})


module.exports = router;