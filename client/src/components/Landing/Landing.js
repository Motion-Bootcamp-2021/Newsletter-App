import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LandingHeader from './LandingHeader';
import LandingFeatures from './LandingFeatures';
import LandingLetterboxDescription from './LandingLetterboxDescription';
import LandingCategories from './LandingCategories';
import LandingHappyUsers from './LandingHappyUsers';
import LandingSubscribe from './LandingSubscribe';
import LandingFooter from './LandingFooter';
import './Landing.scss'

const Landing = ({ user }) => {
    let history = useHistory();

    if(user) {
        history.push('main');
    }

    return (
        <div className="landing-wrapper">
            <div className="landing">
                <LandingHeader />
                <LandingFeatures />
                <LandingLetterboxDescription />
                <LandingCategories />
                <LandingHappyUsers />
                <LandingSubscribe />
                <LandingFooter />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(Landing);
