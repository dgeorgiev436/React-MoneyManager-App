import {LOAD_USER, AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from "../actions/types"


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
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem("token", payload)
			return {...state, token: payload, isAuthenticated: true, loading: false};
		case AUTH_ERROR:
		case REGISTER_FAIL:
		case LOGOUT:
		case LOGIN_FAIL:
			localStorage.removeItem("token")
			return {...state, token: null, isAuthenticated: false, loading: false}
		default:
			return state;
	}
}