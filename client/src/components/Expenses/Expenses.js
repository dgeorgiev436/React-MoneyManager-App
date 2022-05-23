import React, {useState} from "react"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"

const Expenses = ({getAllUserExpenses, currentState}) => {
	const [filteredYear, setFilteredYear] = useState("2022");
	let filteredArray = []
	
	
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	
// 	If array exists
	if(currentState.expense.expense){

// 		Filter through the array and return expenses for current year
		filteredArray = currentState.expense.expense.filter((expense) => {
			expense.date = new Date(expense.date)
			return expense.date.getFullYear().toString() === filteredYear
		})
		

	}


	return (
	<div>
		<Card className="expenses">
			<ExpensesFilter currentYear={filteredYear} onChangeFilter = {filterChangeHandler}/>
			<ExpensesChart expenses = {filteredArray}/>
			<ExpensesList items={filteredArray} />
		</Card>
	</div>
	)
}

const mapStateToProps = state => ({
	currentState: state
})

Expenses.propTypes = {
	currentState: PropTypes.object.isRequired
}


export default connect(mapStateToProps, {})(Expenses);