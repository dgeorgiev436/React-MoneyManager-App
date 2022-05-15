import React, {useState} from "react"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css"

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	
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

export default Expenses