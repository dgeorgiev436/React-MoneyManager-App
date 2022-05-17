import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {LOAD_USER, AUTH_ERROR, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from "./types"
import {setAlert} from "./alert"


// LOAD USER
export const loadUser = () => async dispatch => {
	
	if(localStorage.token){
		setAuthToken(localStorage.token)
	}
	
	
	try{
		const res = await axios.get("/api/users");
		
		dispatch({
			type: LOAD_USER,
			payload: res.data
		})
		
	}catch(err){
		dispatch({
			type: AUTH_ERROR
		})
	}
}


// Register user
export const registerUser = (name, email, password) => async dispatch => {
	
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	}
	
	const body = JSON.stringify({name,email,password})
	
	try{
		
		const res = await axios.post("/api/users", body, config);
		
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		})
		
// 		Loading user right after registration
		dispatch(loadUser())		
		
	}catch(err){
		
		
		const errors = err.response.data.errors;
			
		if(errors){
			errors.forEach(error => dispatch(setAlert(error.msg, "danger")))
		}
		
		dispatch({
			type: REGISTER_FAIL
		});

	}
}

// Login user
export const login = (email, password) => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	}
	const body = JSON.stringify({email,password})
	
	try{
		const res = await axios.post("/api/auth",body, config)
		
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		})
		
// 		Load user immediatelly after login
		dispatch(loadUser())
		
	}catch(err){
		const errors = err.response.data.errors;
		
		if(errors){
			errors.forEach(error => dispatch(setAlert(error.msg, "danger")))
		}
		
		dispatch({
			type: LOGIN_FAIL
		})
	}
	
}

// LOGOUT USER
export const logout = () => dispatch => {
	dispatch({
		type: CLEAR_PROFILE
	})
	
	dispatch({
		type: LOGOUT
	})
	
}
