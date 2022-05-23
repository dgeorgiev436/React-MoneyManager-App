import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./Landing.css"
import {logout} from "../../actions/auth"

const Navbar = ({isAuthenticated, logout}) => {
	
	const logoutHandler = () => {
		logout()
	}
	
	
	return(
	<header>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			
     	<Link to="/"><i className="icon fa-solid fa-sack-dollar"></i> MoneyManager</Link>
        <nav className="nav-bar">
            <ul> 
				{isAuthenticated ? <a onClick={logoutHandler} href="/">Logout</a> : <Link to="/login"> Sign Up</Link>}
            </ul>
        </nav>

    </header>	
	)
}

Navbar.propTypes = {
	isAuthenticated: PropTypes.bool,
	logout: PropTypes.func.isRequired
}

// Get the current state to the component
const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout})(Navbar);
