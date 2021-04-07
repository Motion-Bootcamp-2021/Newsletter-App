import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LandingHeader from './LandingHeader';
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
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(Landing);
