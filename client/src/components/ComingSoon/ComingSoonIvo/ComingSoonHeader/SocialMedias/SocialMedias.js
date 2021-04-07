import { ReactComponent as FacebookIcon } from './assets/facebook-icon.svg';
import { ReactComponent as LinkedinIcon } from './assets/linkedin-icon.svg';
import { ReactComponent as InstagramIcon } from './assets/instagram-icon.svg';
import { ReactComponent as TwitterIcon } from './assets/twitter-icon.svg';
import './SocialMedias.scss';

function SocialMedias() {
    return(
        <div className="social-media-container">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FacebookIcon className="social-media-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <LinkedinIcon className="social-media-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <InstagramIcon className="social-media-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <TwitterIcon className="social-media-icon" />
            </a>
        </div>
    );
}

export default SocialMedias;