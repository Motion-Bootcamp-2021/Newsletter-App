import { useHistory } from 'react-router-dom';
import { BtnFacebook, BtnGoogle, BtnTwitter } from '../../shared/Buttons/BtnSocialMedia/BtnSocialMedia';
import { googleSignIn, facebookSignIn } from '../../../services/userService';
import './SocialMediaSignUp.scss';

const SocialMediaSignUp = () => {
    const history = useHistory();

    const handleGoogle = async () => {
        await googleSignIn(history);
    }

    const handleFacebook = async () => {
        await facebookSignIn(history);
    }

    return (
        <section className="social-media-signup">
            <p>or use account</p>
            <BtnTwitter className="btn-twitter" />
            <BtnFacebook className="btn-facebook" onClick={handleFacebook} />
            <BtnGoogle className="btn-google" onClick={handleGoogle} />

        </section>
    )
}

export default SocialMediaSignUp;