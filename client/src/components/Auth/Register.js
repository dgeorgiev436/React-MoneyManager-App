import {Fragment, useState} from "react";
import {Link, Navigate} from "react-router-dom"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {registerUser} from "../../actions/auth"
import {setAlert} from "../../actions/alert"

const Register = ({isAuthenticated, registerUser}) => {
	
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: ""
	});
	
	const {name, email, password, password2} = formData;
	
	const onChangeHandler = (event) => {
		setFormData({...formData, [event.target.name]: event.target.value })
	} 
	
	const onSubmitHandler = async(event) => {
		event.preventDefault();
		
		if(password !== password2){
			setAlert("Password do not match", "danger")
		}else{
			registerUser({name, email, password})	
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
	
	return(
		<Fragment>
			  <h1 className="large text-primary">Sign Up</h1>
			  <hr></hr>
			  <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
			  <form onSubmit={onSubmitHandler} className="form">
				<div className="form-group">
				  <input type="text" placeholder="Name" onChange={onChangeHandler} value={name} name="name" required />
				</div>
				<div className="form-group">
				  <input type="email" onChange={onChangeHandler} value={email} required placeholder="Email Address" name="email" />
				</div>
				<div className="form-group">
				  <input
					type="password"
					placeholder="Password"
					value={password}
					onChange={onChangeHandler}
					name="password"
					minLength="6"
				  />
				</div>
				<div className="form-group">
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
		</Fragment>
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