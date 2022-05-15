const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Expense = require("../../models/Expense");
const auth = require("../../middleware/auth");
const {check, validationResult} = require("express-validator");

// @route 	POST api/expense
// @desc 	Add an expense
// @access 	Private
router.post("/", auth, [
	check("title", "Title is required").not().isEmpty(),
	check("amount", "Amount is required").not().isEmpty()
], async(req,res) => {
	
	const errors = validationResult(req);
	
	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array()});
	}
	
	try{
		
		const user = await User.findById(req.user.id).select("-password");
		
		const newExpense = {
			title: req.body.title,
			amount: req.body.amount,
			user: req.user.id
		}
		
		const expense = new Expense(newExpense)
		
		await expense.save();
		
		res.json(expense)
		
	}catch(err){
		
		console.error(err.message);
		res.status(500).send("Server error")
	}
});


// @route 	GET api/expenses
// @desc 	Get all expenses of the user
// @access 	Private
router.get("/", auth, async(req,res) => {
	
	try{
		
		const expenses = await Expense.find({user: req.user.id})
		
		res.json(expenses);
		
	}catch(err){
		
		console.error(err.message);
		res.status(500).send("Server error")
	}
})



module.exports = router;