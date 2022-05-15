import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {LOAD_USER, AUTH_ERROR} from "./types"


// LOAD USER
export const loadUser = () => async dispatch => {
	if(localStorage.token){
		setAuthToken(localStorage.token)
	}
	
	
	try{
		const res = await axios.get("api/users");
		
		dispatch({
			type: LOAD_USER,
			dispatch: res.data
		})
	}catch(err){
		dispatch({
			type: AUTH_ERROR
		})
	}
}
