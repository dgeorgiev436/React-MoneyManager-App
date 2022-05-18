import React, {useState, useEffect} from "react"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {getAllUserExpenses} from "../../actions/expense"

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2022");
	
	useEffect(() => {
		props.getAllUserExpenses()
	}, [props.getAllUserExpenses])
	
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	
	const filteredArray = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

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
	expense: state.expense
})

Expenses.propTypes = {
	expense: PropTypes.object.isRequired,
	getAllUserExpenses: PropTypes.func.isRequired
}


export default connect(mapStateToProps, {getAllUserExpenses})(Expenses);