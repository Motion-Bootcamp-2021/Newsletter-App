import LandingNav from '../Landing/LandingHeader/LandingNav';
import HowItWorksEntry from './HowItWorksEntry';
import HowToStart from './HowToStart';
import WelcomeToLetterbox from './WelcomeToLetterbox';
import ChooseViewMode from './ChooseViewMode';
import Personalize from './Personalize/Personalize';
import Community from './Community/Community';
import LandingSubscribe from '../Landing/LandingSubscribe';
import LandingFooter from '../Landing/LandingFooter';
import './HowItWorks.scss';

const HowItWorks = () => {
    return (
        <div className="how-it-works-wrapper">
            <LandingNav />

            <HowItWorksEntry />

            <HowToStart />

            <WelcomeToLetterbox />

            <ChooseViewMode />

            <Personalize />

            <Community />

            <LandingSubscribe />

            <LandingFooter />
        </div>
    );
}

export default HowItWorks;