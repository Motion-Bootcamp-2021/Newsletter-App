import { ReactComponent as FooterLogo } from './assets/footer-logo.svg';
import './LandingFooter.scss';

const LandingFooter = () => {
    return(
        <div className="landing-footer">
            <div className="landing-footer-content">
                <div className="footer-header">
                    <div className="links-columns-wrapper">
                        <div className="links-column">
                            <span className="links-column-title">Get started</span>
                            <a href="#">Blog</a>
                            <a href="#">Site Map</a>
                            <a href="#">F.A.Q.</a>
                        </div>

                        <div className="links-column">
                            <span className="links-column-title">Pricing</span>
                            <a href="#">Silver</a>
                            <a href="#">Bronze</a>
                            <a href="#">Gold</a>
                        </div>

                        <div className="links-column">
                            <span className="links-column-title">Follow</span>
                            <a href="#">Facebook</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="footer-subfooter">
                    <div className="footer-subfooter-links">
                        <a href="#">Privacy Policy</a> / 
                        <a href="#">Personal Information</a> / 
                        <a href="#">Terms of Service</a>
                    </div>
                    
                    <div className="subfooter-logo-wrapper">
                        <span className="subfooter-year">2021</span>
                        <div className="subfooter-logo">
                            <FooterLogo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingFooter;