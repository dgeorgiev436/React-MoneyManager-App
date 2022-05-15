import axios from "axios";

// If token exists, place it in a global header

const setAuthToken = (token) => {
	if(token){
		
		axios.defaults.headers.common["x-auth-token"] = token;
	}else{
		delete axios.defaults.header.common["x-auth-token"];
	}
}


export default setAuthToken;