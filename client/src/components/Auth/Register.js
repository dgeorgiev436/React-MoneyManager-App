import {Fragment, useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {registerUser} from "../../actions/auth"
import {setAlert} from "../../actions/alert"
import Modal from "../UI/Modal"
import "./Form.css"

const Register = ({isAuthenticated, registerUser}) => {
	
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: ""
	});
	const navigate = useNavigate();
	
	const [isVisible, setIsVisible] = useState(true)
	
	const {name, email, password, password2} = formData;
	
	const onCancelHandler = () => {
		setIsVisible(false);
		navigate("/")
	}
	
	const onChangeHandler = (event) => {
		setFormData({...formData, [event.target.name]: event.target.value })
	} 
	
	const onSubmitHandler = async(event) => {
		event.preventDefault();
		
		if(password !== password2){
			setAlert("Password do not match", "danger")
		}else{
			registerUser(name, email, password)	
		}
		
		setFormData({
			name: "",
			email: "",
			password: "",
			password2: ""
		})
	}
	
// 	If user is logged in, redirect
	if(isAuthenticated) {
		return <Navigate to="/dashboard"/>
	}
	
	
	const registerContent = <div className="login-box">
		  
			 <h1 className="large text-primary">Sign Up</h1>
			  <hr></hr>
			  <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
			  <form onSubmit={onSubmitHandler} className="form">
				<div className="user-box">
				  <input type="text" placeholder="Name" onChange={onChangeHandler} value={name} name="name" required />
				</div>
				<div className="user-box">
				  <input type="email" onChange={onChangeHandler} value={email} required placeholder="Email Address" name="email" />
				</div>
				<div className="user-box">
				  <input
					type="password"
					placeholder="Password"
					value={password}
					onChange={onChangeHandler}
					name="password"
					minLength="6"
				  />
				</div>
				<div className="user-box">
				  <input
					type="password"
					placeholder="Confirm Password"
					value={password2}
					onChange={onChangeHandler}
					name="password2"
					minLength="6"
				  />
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			  </form>
			  <p className="my-1">
				Already have an account? <Link to="/login">Sign In</Link>
			  </p>
			  <button className="btn" onClick={onCancelHandler}>Cancel</button>
			  
		  </div>
	
	return(
		<Modal cancelHandler={onCancelHandler}>
			 { isVisible && registerContent}
		</Modal>
	)
}


Register.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, {registerUser})(Register)