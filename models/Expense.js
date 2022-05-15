const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExpenseSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
	
})