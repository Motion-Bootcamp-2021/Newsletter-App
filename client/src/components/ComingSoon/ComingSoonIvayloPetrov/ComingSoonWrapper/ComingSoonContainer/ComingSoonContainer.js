import { useState } from 'react';
import BenefitsContainer from './BenefitsContainer';
import ComingSoonSubscribe from './ComingSoonSubscribe';
import ComingSoonSubscribed from './ComingSoonSubscribed';
import ComingSoonTitle from './ComingSoonTitle';
import './ComingSoonContainer.scss';

const ComingSoonContainer = () => {
    const [subscribed, setSubscribed] = useState(false);

    return (
        <main className="coming-soon-container">
            <ComingSoonTitle title={subscribed ?
                'Thank you for joining our community'
                : 'Bring back the joy of reading newsletters'}
            />

            {subscribed ?
                <ComingSoonSubscribed />
                : <ComingSoonSubscribe setSubscribed={setSubscribed}/>
            }

            <BenefitsContainer />
        </main>
    );
}

export default ComingSoonContainer;