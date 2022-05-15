import React, {useState} from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}
// 		Custom component function from app.js
		props.onAddExpense(expenseData)
		setIsEditing(false)
	}
	const anotherExpenseHandler = () => {
		setIsEditing(true)
	}
	
	const cancelHandler = () => {
		setIsEditing(false)
	}
	
	return (
		<div className="new-expense">
			{!isEditing && <button onClick={anotherExpenseHandler}>Add Another Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCancel={cancelHandler} />}
		</div>
	)
}

export default NewExpense;