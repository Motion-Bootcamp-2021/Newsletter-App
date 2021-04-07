import FacebookIcon from './SocialMediaIcons/FacebookIcon';
import LinkedinIcon from './SocialMediaIcons/LinkedinIcon';
import InstagramIcon from './SocialMediaIcons/InstagramIcon';
import TwitterIcon from './SocialMediaIcons/TwitterIcon';

import './SocialMediaNav.scss';

const SocialMediaNav = () => {
    return (
        <nav className="social-media-nav">
            <ul className="social-media-nav-list">
                <li><FacebookIcon /></li>
                <li><LinkedinIcon /></li>
                <li><InstagramIcon /></li>
                <li><TwitterIcon /></li>
            </ul>
        </nav>
    )
}

export default SocialMediaNav;