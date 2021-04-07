import React, { useState, useContext } from 'react';
import OnboardingContext from '../../../../contexts/OnboardingContext';
import Input from '../Input/Input';
import { useForm } from '../../../../hooks/';
import './SignUpEmailForm.scss';

const SingUpEmailForm = ({ emailSignUpMethod, nextPage }) => {

    const [state, setValues] = useForm({email:'', password:'', rePassword:''});

    const [emailError, setEmailErrorState] = useState(false);
    const [emailSignUp, setEmailSignUpState] = useState(false);
    const [passwordError, setPasswordErrorState] = useState(false);
    const [rePasswordError, setRePasswordErrorState] = useState(false);
    const [onboardingState, setOnboardingState] = useContext(OnboardingContext);

    const emailValidation = () => {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!state.email.match(pattern)) {
            setEmailErrorState({
                emailError: true
            });
        } else if (emailError) {
            setEmailErrorState(false);
        }
    }

    const passwordValidation = () => {
        const passwordPatern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

        if (!state.password.match(passwordPatern)) {
            setPasswordErrorState(true);
        } else {
            setPasswordErrorState(false);
        }
    }

    const rePasswordValidation = () => {
        if (state.password !== state.rePassword) {
            setRePasswordErrorState(true);
        } else {
            setRePasswordErrorState(false);
        }
    }

    const handleEmailMethodSignUp = (event) => {
        event.preventDefault();
        if (emailError || !state.email) {
            return;
        }
        emailSignUpMethod();
        setEmailSignUpState(true);
    }

    const handleEmailSignUp = (event) => {
        event.preventDefault();
        if (emailError || passwordError || rePasswordError ||  state.email === '' 
            || state.password === '' || state.rePassword === '') {
            return;
        }

        setOnboardingState({
            ...onboardingState,
            email:state.email, 
            password:state.password
        })

        nextPage()
    }

    if (!emailSignUp) {
        return (
            <form className="signUp-email" onSubmit={handleEmailMethodSignUp}>
                <Input label="Email Adress.." error={emailError} errorMessage="Invalid Email" id="email" 
                    value={state.email} placeholder="Email Adres.."
                    onBlur={emailValidation} onChange={setValues} />

                <button className="singUp-email-button">Get In</button>
            </form>
        )
    }
    else {
        return (
            <form className="signUp-email-method" onSubmit={handleEmailSignUp}>
                <Input label="Email Adress.." error={emailError} errorMessage="Invalid Email" id="email"
                    value={state.email} placeholder="Email Adres.."
                    onBlur={emailValidation} onChange={setValues} />
                <Input type="password" label="Password.." error={passwordError} id="password"
                    value={state.password} errorMessage="Minimum eight characters, at least one letter and one number"
                    placeholder="Password.."
                    onBlur={passwordValidation} onChange={setValues} />
                <Input type="password" label="ConfirmPassword.." error={rePasswordError} id="rePassword"
                    value={state.rePassword} errorMessage="Passwords mismatch"
                    placeholder="ConfirmPassword.."
                    onBlur={rePasswordValidation} onChange={setValues} />

                <div onClick={handleEmailSignUp}>
                    <div className="next-step-text">Next step </div>
                    <div className="next-step-arrow">{"->"}</div>
                </div>
            </form>
        )
    }
}

export default SingUpEmailForm;
                