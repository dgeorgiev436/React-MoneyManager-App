import PropTypes from "prop-types"
import {connect} from "react-redux"
import "./Alert.css"


const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
	<div key={alert.id} className={`alert alert-${alert.alertType}`}>
		{alert.msg}
	</div>

	))




// Give prop type
Alert.propTypes = {
	alerts: PropTypes.array.isRequired
}

// Make props.alerts available to the component
const mapStateToProps = state => ({
	alerts: state.alert
})

export default connect(mapStateToProps)(Alert);