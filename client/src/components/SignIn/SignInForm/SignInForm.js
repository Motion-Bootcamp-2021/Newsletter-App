import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { BtnFilledGray, BtnFilledGreen } from '../../shared/Buttons/BaseBtn/BaseBtn';
import { useForm } from '../../../hooks';
import { signIn } from '../../../services/userService';
import Input, { InputError } from '../../shared/Input/Input';
import './SignInForm.scss';

const SignInForm = () => {
    const history = useHistory();

    const [state, setValues] = useForm({ email: '', password: '' });
    const [errState, setErrValues] = useState({ emailErr: false, signInErr: false });

    const handleSignInFilledForm = (event) => {
        event.preventDefault();
        if (state.email && state.password) {
            signIn(state.email, state.password)
                .then(() => {
                    history.push('/');
                })
                .catch(err => {
                    setErrValues((currentErrState) => ({
                        ...currentErrState,
                        signInErr: "Email and password doesnt match!"
                    }))
                })
        }
    }
    const emailValidation = () => {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!state.email.match(pattern)) {
            setErrValues((currentErrState) => ({
                ...currentErrState,
                emailErr: "You must enter valid email adress!"
            }));
        } else if (errState.emailErr) {
            setErrValues((currentErrState) => ({
                ...currentErrState,
                emailErr: false,
                signInErr: false
            }));
        }
    }

    const clearErrState = () => {
            setErrValues((currentErrState) => ({
                ...currentErrState,
                signInErr: false
            }));
        }

    const handleSignInUnFilledForm = (event) => {
        event.preventDefault();
    }

    return (
        <form className='signIn-form'>
            <h1 className="singin-header">Sign in to Letterbox</h1>
            {
                errState.emailErr || errState.signInErr
                ? <InputError id="email" placeholder={errState.emailErr ? errState.emailErr : errState.signInErr} value={state.email} onChange={setValues} onBlur={emailValidation}/>
                : <Input id="email" placeholder="Enter your email address" value={state.email} onChange={setValues} onBlur={emailValidation}/>
            }

            {
                errState.signInErr 
                ? <InputError type="password" id="password" placeholder={errState.signInErr} value={state.password}  onChange={setValues} onBlur={clearErrState}/>
                : <Input type="password" id="password" placeholder="Enter your password" value={state.password}  onChange={setValues} onBlur={clearErrState}/>
            }
            
            {   
                state.email && state.password && !errState.emailErr
                    ? <BtnFilledGreen className="sign-btn-green" onClick={handleSignInFilledForm}>Sign in</BtnFilledGreen>
                    : <BtnFilledGray className="sign-btn-gray" onClick={handleSignInUnFilledForm} >Sign in</BtnFilledGray>
            }

            <Link to="/forgotpassword">Forgot password?</Link>
        </form>
    )
}

export default SignInForm;