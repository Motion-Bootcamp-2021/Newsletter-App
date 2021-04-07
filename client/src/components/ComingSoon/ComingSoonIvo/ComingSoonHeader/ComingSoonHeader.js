import Logo from './assets/logo.png';
import SocialMedias from './SocialMedias';
import './ComingSoonHeader.scss';

function ComingSoonHeader() {
    return(
        <header className="coming-soon-header">
            <img className="logo" src={Logo} alt="Letterbox Logo"/>
            <SocialMedias />
        </header>
    );
}

export default ComingSoonHeader;