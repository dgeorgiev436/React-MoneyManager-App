import {Link, Navigate} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Landing = ({isAuthenticated}) => {
	
// 	Deny access if the user is logged in. Instead redirect
	
	if(isAuthenticated){
		return <Navigate to="dashboard" /> 
	}
	
	return(
		<section>
			<div>
				<div>
					<h1>MoneyManager</h1>
					<p>Helps you keep track of your spendings</p>
					<div>
						<Link to="/register">Sign up</Link>
						<Link to="/login">Login</Link>
					</div>
				</div>
			</div>
		</section>
	)
}


Landing.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)