import { ReactComponent as CheckIcon } from './assets/check-icon.svg';
import { ReactComponent as SubscribeCards } from './assets/subscribe-cards-icon.svg';
import './LandingSubscribe.scss';

const LandingSubscribe = () => {
    return(
        <div className="landing-subscribe">

            <div className="landing-subscribe-text">

                <div className="landing-subscribe-text-content">
                    <h2 className="landing-subscribe-text-title">Bring back the joy of reading newsletters</h2>

                    <h3 className="landing-subscribe-text-subtitle">Subscribe and be ready for an amazing experience</h3>

                    <ul className="landing-subscribe-text-benefits">
                        <li>
                            <span className="check-icon">
                                <CheckIcon />
                            </span>
                            Save time and read your newsletters in one place.
                        </li>
                        <li>
                            <span className="check-icon">
                                <CheckIcon />
                            </span>
                            Organize your newsletter feed according to your interests.
                        </li>
                        <li>
                            <span className="check-icon">
                                <CheckIcon />
                            </span>
                            Forget about newsletters emails and focus only in reading.
                        </li>
                    </ul>

                    <button className="subscribe-btn">Subscribe</button>
                </div>
                
            </div>

            <div className="landing-subscribe-image">
                <SubscribeCards />
            </div>
        </div>
    );
}

export default LandingSubscribe;