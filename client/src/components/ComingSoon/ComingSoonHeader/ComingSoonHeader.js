import './ComingSoonHeader.scss'
import SocialMediaIcons from './SocialMediaIcons'
import { ReactComponent as LetterBoxLogo } from '../../shared/Logo/LogoGreen.svg'
const Header = () => {

    return (
        <div className='comingsoon-header-shadow'>
            <div className='comingsoon-header'>
                <LetterBoxLogo className="comingsoon-header-letterbox-logo"/>
                <SocialMediaIcons />
            </div>

        </div>
    )
}

export default Header;