import { ReactComponent as LogoGreen } from '../../../shared/Logo/LogoGreen.svg';
import './LandingNav.scss';

const LandingNav = () => {
    return (
        <div className="landing-nav">
            <div className="landing-logo">
                <LogoGreen />
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">How it works</a>
                </li>
                <li>
                    <a href="#" className="green-text">Why Letterbox?</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <button className="login-btn">Login</button>
                </li>
            </ul>
        </div>
    );
};

export default LandingNav;
