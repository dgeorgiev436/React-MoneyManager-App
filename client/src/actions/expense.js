import axios from "axios";
import {ADD_EXPENSE, ADD_EXPENSE_ERROR, GET_ALL_USER_EXPENSES, GET_ALL_USER_EXPENSES_ERROR} from "./types"




// Get all expenses of the user
export const getAllUserExpenses = () => async dispatch => {
	
	try{
		
		const res = await axios.get("/api/expenses");
		
		dispatch({
			type: GET_ALL_USER_EXPENSES,
			payload: res.data
		})
		
	}catch(err){
		
		dispatch({
			type: GET_ALL_USER_EXPENSES_ERROR
		})
		
		
	}
}



// ADD EXPENSE
export const addExpense = (title, amount, date) => async dispatch => {
	
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	}

	const body = JSON.stringify({title, amount})
	
	try{
		
		const res = await axios.post("/api/expenses", body, config);
		
		dispatch({
			type: ADD_EXPENSE,
			payload: res.data
		});
		
		dispatch(getAllUserExpenses());
		
	}catch(err){
		
		dispatch({
			type: ADD_EXPENSE_ERROR
		})
		
		
	}
}
