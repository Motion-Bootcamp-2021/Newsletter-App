import { useHistory } from 'react-router-dom';
import { BtnFacebook, BtnGoogle, BtnTwitter } from '../../shared/Buttons/BtnSocialMedia/BtnSocialMedia';
import { googleSignIn, facebookSignIn } from '../../../services/userService';
import './SocialMediaSignIn.scss';

const SocialMediaSignIn = () => {
    const history = useHistory();

    const handleGoogle = async () => {
        await googleSignIn(history);
    }

    const handleFacebook = async () => {
        await facebookSignIn(history);
    }

    return (
        <section className="social-media-signin">
            <p>or use account</p>
            <BtnTwitter className="btn-twitter" onClick={() => { }} />
            <BtnFacebook className="btn-facebook" onClick={handleFacebook} />
            <BtnGoogle className="btn-google" onClick={handleGoogle} />

        </section>
    )
}

export default SocialMediaSignIn;