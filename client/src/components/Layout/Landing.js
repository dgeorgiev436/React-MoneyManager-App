import {Link, Navigate} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Fragment} from "react"
import "./Landing.css"

const Landing = ({isAuthenticated}) => {
	
// 	Deny access if the user is logged in. Instead redirect
	
	if(isAuthenticated){
		return <Navigate to="dashboard" /> 
	}
	
	return(
<Fragment>
    <main>
        <section className="intro">
            <div className="intro-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-intro.png" alt="illustration-intro"/></div>
            <div className="intro-content">
                <h1> All your expenses in one place, accessible anywhere.</h1>

                <p className="lg-p mt-2">MoneyManager stores all your expenses in one location. Access them wherever you need, add new expenses and check your budget at any time.
                </p>
				<Link to="/register"><button className="btn mt-2"> Get Started</button></Link>
			
			</div>
				


        </section>
        <section className="features">

            <div className="features-item">
                <div className="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-access-anywhere.svg" alt=""/> </div>
                <div className="features-item-body  mt-2">
                    <h3>Access your expenses, anywhere</h3>

                    <p>The ability to use a smartphone, tablet, or computer to access your expenses means your file follows you everywhere</p>
                </div>
            </div>

            <div className="features-item">
                <div className="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-security.svg" alt=""/> </div>
                <div className="features-item-body mt-2">
                    <h3> Security you can trust</h3>
                    <p> Authentication and encryption are just a couple of the security features we allow to help secure your information.</p>
                </div>

            </div>
        </section>
        <section className="productive">
            <div className="productive-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-stay-productive.png" alt=""/> </div>

            <div className="productive-content">

                <h2>Stay on top of your spendings, wherever you are</h2>

                <p className="lg-p"> Never let location be an issue when accessing your budget. MoneyManager has you covered everywhere. </p>

                <p className="lg-p"> Securely log in into your account from any device without worrying about security.
                </p>
            </div>
        </section>

        <section className="testimonial">

            <div className="testimonial-item">
                <div className="testimonial-item-text">
                    <p>Great app, I completely rely on this app to control and monitor my income and expenses, after using for a short while, you can see your spending trends and areas where you can cut and trim some expenses back. Developers always take suggestions for improvement and do incorporate them if they will be a benefit. Highly rate the app. I had tried about 4 or 5 different ones before finding this one and I've had no need to look any further after using this.</p>
                </div>
                <div className="testimonial-item-reviewer">
                    <div className="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-1.jpg" alt=""/></div>
                    <div className="ml-1 testimonial-item-reviewer-text">
                        <h4>Satish Patel</h4>
                    </div>
                </div>
            </div>


            <div className="testimonial-item">
                <div className="testimonial-item-text">
                    <p>MongeyManager has helped me reduce my spendings with more than 20% by just being able to track expenses better.</p>
                </div>
                <div className="testimonial-item-reviewer">
                    <div className="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-2.jpg" alt=""/></div>
                    <div className="ml-1 testimonial-item-reviewer-text">
                        <h4> Bruce McKenzie </h4>
                    </div>
                </div>
            </div>
        </section>
    </main>
	
  
</Fragment>
	)
}


Landing.propTypes = {
	isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)