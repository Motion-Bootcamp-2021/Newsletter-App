import SocialMediaNav from './SocialMediaNav';
import ComingSoonLogo from './ComingSoonLogo';

import './ComingSoonHeader.scss';

const ComingSoonHeader = () => {
    return (
        <div className="coming-soon-ip-header-wrapper">
            <header className="coming-soon-ip-header">
                <ComingSoonLogo />
                <SocialMediaNav />
            </header>
        </div>
    )
}

export default ComingSoonHeader;