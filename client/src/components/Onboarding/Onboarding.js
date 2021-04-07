import { useState } from 'react';

import OnboardingContext from "../../contexts/OnboardingContext";
import OnboardingPage from "./OnboardingPage";

const Onboarding = () => {
    const [onboardingState, setOnboardingState] = useState(
        {email:'', password: '', topics: [], subscriptions: [], emailMask:''});

    return (
        <OnboardingContext.Provider value={[onboardingState, setOnboardingState]}>
            <OnboardingPage />
        </OnboardingContext.Provider>
    )
}

export default Onboarding;