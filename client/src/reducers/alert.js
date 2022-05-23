import {SET_ALERT, REMOVE_ALERT, CLEAR_ALERT} from "../actions/types";


const initialState = [];

export default function(state = initialState, action){
	
	switch(action.type){
		case SET_ALERT:
			return [...state, action.payload];
		case REMOVE_ALERT:
			return state.filter(alert => alert.id !== action.payload);
		case CLEAR_ALERT:
			return initialState
		default:
			return state;
	}
}