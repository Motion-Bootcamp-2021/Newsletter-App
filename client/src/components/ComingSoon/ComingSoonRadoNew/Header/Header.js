import {ReactComponent as FacebookHeader} from '../assets/facebook.svg';
import {ReactComponent as LinkedinHeader} from '../assets/linkedin.svg';
import {ReactComponent as InstagramHeader} from '../assets/instagram.svg';
import {ReactComponent as TwitterHeader} from '../assets/twitter.svg';
import './Header.scss';


function Header(){

    return (
        <div className="header">
            <div  className="header-container">

                <div className="logo-element">
                    <span>LETTERBOX</span>
                </div>

                <div className="soc-media">
                    <FacebookHeader />
                    <LinkedinHeader />
                    <InstagramHeader />
                    <TwitterHeader />
                </div>

            </div>
        </div>
    )
}

export default Header;