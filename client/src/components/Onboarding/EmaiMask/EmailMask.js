import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import OnboardingContext from '../../../contexts/OnboardingContext';
import Button from '../SignUp/Button/Button';
import Input from '../SignUp/Input/Input';
import './EmailMask.scss';

function EmailMask ({nextPage}){
    const [onboardingState, onboardingSetState] = useContext(OnboardingContext);
    const [emailMask, setEmailMask] = useState('');
    const [emailMaskError, setEmailMaskErrorState] = useState(false);

    const changeEmailMask = (event) => {
        setEmailMask(event.target.value)
    };

    const emailMaskValidation = () => {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!emailMask.match(pattern)) {
            setEmailMaskErrorState({
                emailMaskError: true
            });
        } else if (emailMaskError) {
            setEmailMaskErrorState(false);
        }
    }
    
    const sendData = () => {
        const url = 'http://localhost:5000/signup';
        const headers = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(onboardingState)
        }
        fetch(url, headers);
    }
    
    const importEmailMask = () => {
        onboardingSetState({
            ...onboardingState,
            subscriptions: [1, 2, 3],
            emailMask: emailMask
        })

    }

    const finishSignUp = () => {
        console.log(onboardingState)
        nextPage();
        sendData();
    }

    return( 
        <div className="email-mask-page">
            <h1 className="pageTitle">Onboarding</h1>
            <div className="pageNumber">03</div>

            <div className="title">Your email mask</div>

            <div className="import-emails-title">Import emails</div>
            <div className="import-emails-text">New York (CNN Business)It's been seven years since Microsoft released the Xbox One, the last</div>
            
            <form>
                <Input label="" error={emailMaskError} errorMessage="Invalid Email" id="emailmask"
                    value={emailMask} placeholder=""
                    onBlur={emailMaskValidation} onChange={changeEmailMask} />

                
                <Button text="Import" id="emailMaskImprot" onClick={importEmailMask}/>
            </form>

                <Link to="/explore" onClick={finishSignUp}>
                    <div className="next-step-text">Next step </div>
                    <div className="next-step-arrow">{"->"}</div>
                </Link>
        </div>
    )
}

export default EmailMask;