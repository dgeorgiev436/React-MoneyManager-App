import React from "react"
import {removeExpense} from "../../actions/expense"
import "./ExpenseItem.css"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import {connect} from "react-redux"
import PropTypes from "prop-types"


const ExpenseItem = (props) => {
	
	const removeExpenseHandler = () => {
		props.removeExpense(props.id)
	}
	
	return (
	<li>
		<button onClick={removeExpenseHandler} className="btn-delete-expense">Delete</button>
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	</li>
	);
}



ExpenseItem.propTypes = {
	removeExpense: PropTypes.func.isRequired
}


export default connect(null, {removeExpense})(ExpenseItem);