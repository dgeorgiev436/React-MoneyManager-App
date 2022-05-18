import {combineReducers} from "redux";
import auth from "./auth"
import alert from "./alert"
import expense from "./expense"


export default combineReducers({
	auth, alert, expense
});