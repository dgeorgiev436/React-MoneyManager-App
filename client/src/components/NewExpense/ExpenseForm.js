import React, { useState } from "react"
import "./ExpenseForm.css"
import {addExpense} from "../../actions/expense"
import {connect} from "react-redux"
import PropTypes from "prop-types"


// USIGN SAPARATE STATES FOR EACH INPUT AND USING SIGNLE STATE FOR ALL INPUTS
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	
	
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		
	}
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	}
	const dateChangeHandler = (event) => {
		
		setEnteredDate(event.target.value)
		
	}
	
	const submitHandler = (event) => {
		event.preventDefault();
		
		

		
		if(enteredTitle && enteredAmount){
			props.addExpense(enteredTitle, enteredAmount, enteredDate)
		}
		
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	}
	
	
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input onChange={titleChangeHandler} value={enteredTitle} required type="text" id="title"/>
				</div>
				<div className="new-expense__control">
					<label>Number</label>
					<input onChange={amountChangeHandler} value={enteredAmount} required type="number" min="0.01" step="0.01" id="price"/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input onChange={dateChangeHandler} value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" id="date"/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
				<button onClick={props.onCancel} type="button">Cancel</button>
			</div>
		</form>
	)
}


const mapStateToProps = state => ({

})

ExpenseForm.propTypes = {
	addExpense: PropTypes.func.isRequired	
}



export default connect(mapStateToProps, {addExpense})(ExpenseForm)