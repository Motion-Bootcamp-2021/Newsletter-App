import UnsubscribeIcon from './assets/unsubscribe-icon.svg';
import EmailIcon from './assets/email-icon.svg';
import DiscoverIcon from './assets/discover-icon.svg';
import ReadingIcon from './assets/reading-icon.svg';
import './Features.scss';

function Features() {
    return(
        <div className="features-container">
            <div className="feature">
                <img className="feature-icon" src={UnsubscribeIcon} alt="Unsubscribe Icon"/>
                <div className="feature-txt">
                    <h3 className="feature-title">One-Click Unsubscribe</h3>
                    <p className="feature-desc">Don’t like what you’re reading? Remove the feed and never see it again.</p>
                </div>
            </div>
            <div className="feature">
                <img className="feature-icon" src={EmailIcon} alt="Email Icon"/>
                <div className="feature-txt">
                    <h3 className="feature-title">Your Own Letterbox Email</h3>
                    <p className="feature-desc">See something cool on the web? Subscribe with your new custom email.</p>
                </div>
            </div>
            <div className="feature">
                <img className="feature-icon" src={DiscoverIcon} alt="Discover Icon"/>
                <div className="feature-txt">
                    <h3 className="feature-title">Discover Top Newsletters</h3>
                    <p className="feature-desc">Browse through your interests and find the hottest newsletters in that space.</p>
                </div>
            </div>
            <div className="feature">
                <img className="feature-icon" src={ReadingIcon} alt="Reading Icon"/>
                <div className="feature-txt">
                    <h3 className="feature-title">Make Reading Pleasant Again</h3>
                    <p className="feature-desc">Group newsletters into folders, quickly mark as read, switch between day/night mode.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;