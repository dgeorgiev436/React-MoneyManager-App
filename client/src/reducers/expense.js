import {ADD_EXPENSE, ADD_EXPENSE_ERROR, GET_ALL_USER_EXPENSES, GET_ALL_USER_EXPENSES_ERROR} from "../actions/types"

const initialState = {
	loading: true,
	expense: null
}

export default function(state = initialState, action){
	
	const {type, payload} = action;
	
	switch(type){
		// case ADD_EXPENSE:
		// 	return {...state, loading: false, expense: payload};
		case GET_ALL_USER_EXPENSES:
			return {...state, loading: false, expense: payload};
		case ADD_EXPENSE_ERROR:
		case GET_ALL_USER_EXPENSES_ERROR:
			return {...state, loading: false, expense: null}
		default:
			return state;
			
	}
}