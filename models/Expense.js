const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExpenseSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user"
	},
	title: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	date: {
		type: Date
	}
	
})

const Expense = mongoose.model("expense", ExpenseSchema);

module.exports = Expense;