import {connect} from "react-redux"
import PropTypes from "prop-types"
import {Navigate} from "react-router-dom"

// Private route
const PrivateRoute = ({auth: {isAuthenticated, loading}, component: Component, children, ...rest }) => {
	
// 	If user is authenticated render props.children else navigate to login page
	return isAuthenticated ? children : <Navigate to="/login" />
}


const mapStateToProps = state => ({
	auth: state.auth
})

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(PrivateRoute)