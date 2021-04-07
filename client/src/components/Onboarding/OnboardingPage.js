import React, { useContext, useState } from 'react';
import SignUp from './SignUp';
import ChooseTopics from './ChooseTopics';
import EmailMask from './EmaiMask';
import Explore from '../Explore';
import App from '../../App';

const OnboardingPage = () => {
    const [page, setPage ] = useState(0);
    
    const nextPage = () => {
        setPage(page+1);
    }

    switch (page) {
        case 0:
            return (
                <SignUp nextPage={nextPage} />
            )
        case 1:
            return (
                <ChooseTopics nextPage={nextPage} />
            )
        case 2:
            return (
                <EmailMask nextPage={nextPage} />
            )
        case 3:
            return (
                    <Explore />
            )
        default:
            return (
                <App />
        )
    }
}

export default OnboardingPage;