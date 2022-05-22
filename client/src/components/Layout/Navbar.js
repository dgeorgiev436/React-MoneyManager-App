import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Fragment} from "react"
import "./Landing.css"

const Navbar = ({}) => {
	
	
	return(
	<header>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			
     	<Link to="/"><i className="icon fa-solid fa-sack-dollar"></i> MoneyManager</Link>
        <nav className="nav-bar">
            <ul> 
                <Link to="/login"> Sign Up</Link>
            </ul>
        </nav>

    </header>	
	)
}


export default Navbar;