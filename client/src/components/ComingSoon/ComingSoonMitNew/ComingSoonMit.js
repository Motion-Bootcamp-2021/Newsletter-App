import { useState } from 'react';
import SubscribeForm from './SubscribeForm';
import Header from "./HeaderComingSoon";
import Features from './Features/Features';
import './ComingSoonMit.scss'

const ComingSoonMit = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        setSubscribed(true);
    }

    return (
        <div className="comingsoon-layout">
            <Header />
            <div className="comingsoon-layout-main">
                <div className="comingsoon-layout-inner">
                    <h1>Bring back the joy of reading newsletters</h1>
                    <h4 className="message">Discover, subscribe and manage email newsletters in one place.</h4>
                    <SubscribeForm />
                    <Features />
                </div>
            </div>
        </div>
    )
}

export default ComingSoonMit;