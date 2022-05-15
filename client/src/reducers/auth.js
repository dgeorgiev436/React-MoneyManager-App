import {LOAD_USER, AUTH_ERROR} from "../actions/types"


const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	loading: true,
	user: null
}


export default function (state = initialState, action){
	
	const {type, payload} = action;
	
	switch(type){
		case LOAD_USER:
			return {...state, isAuthenticated: true, loading: false, user: payload}
		case AUTH_ERROR:
			localStorage.removeItem("token")
			return {...state, token: null, isAuthenticated: false, loading: false}
		default:
			return state;
	}
}