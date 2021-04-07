import LandingFeaturesHeader from './LandingFeaturesHeader';
import LandingFeaturesContent from './LandingFeaturesContent';
import './LandingFeatures.scss'

const LandingFeatures = () => {
    return (
        <div className="landing-features">
            <LandingFeaturesHeader />
            <LandingFeaturesContent />
        </div>
    );
};

export default LandingFeatures;
