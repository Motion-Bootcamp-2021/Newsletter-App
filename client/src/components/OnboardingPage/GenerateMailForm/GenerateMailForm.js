import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { BtnFilledGray, BtnFilledGreen } from '../../shared/Buttons/BaseBtn/BaseBtn';
import Input, { InputError } from '../../shared/Input/Input';
import { AuthContext } from '../../../contexts/AuthContext';
import { createEmailMask } from '../../../services/userService';

import './GenerateMailForm.scss';
import { useForm } from '../../../hooks';

function GenerateMailForm() {
    const history = useHistory();
    const user = useContext(AuthContext);

    const [state, setUsernameValue] = useForm({ username: '' });
    const [errState, setErrValue] = useState({ usernameErr: false });
    const [validated, setValidated] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();

        if (state.username && validated && user) {
            const idToken = await user.getIdToken(true);

            createEmailMask(state.username, idToken)
            .then((res) => res.json())
            .then((data) => {
                   
                    if (data.error) {
                        throw data.error;
                    }

                    history.push('/');
                })
                .catch((err) => alert(err));
        }
    };

    const validateUsername = () => {
        const pattern = /^\w+$/;

        if (state.username === '') {
            setErrValue({ usernameErr: false });
            setValidated(false);
            return;
        }

        if (!state.username.match(pattern)) {
            setErrValue({ usernameErr: 'Sorry, symbols are not allowed' });
            setValidated(false);
            return;
        }

        setErrValue({ usernameErr: false });
        setValidated(true);
    };

    useEffect(validateUsername, [state]);

    return (
        <form className="generate-mail-form" onSubmit={submitForm}>
            <div className="header-container">
                <h1>Letterbox mail</h1>

                <h4>Subscribtions for newsletters will be made with this mail.</h4>
            </div>

            <div className="input-container">
                {errState.usernameErr ? (
                    <InputError
                        id="username"
                        placeholder={errState.usernameErr}
                        value={state.username}
                        endText="@letterbox.io"
                        onChange={setUsernameValue}
                        autofocus={state.username}
                    />
                ) : (
                    <Input
                        id="username"
                        placeholder="Enter your username"
                        value={state.username ? state.username : ''}
                        endText="@letterbox.io"
                        onChange={setUsernameValue}
                        autofocus={state.username}
                    />
                )}
            </div>

            <div className="btn-container">
                {state.username && validated && !errState.usernameErr ? (
                    <BtnFilledGreen className="sign-btn-green">Create Letterbox Mail</BtnFilledGreen>
                ) : (
                    <BtnFilledGray className="sign-btn-gray">Create Letterbox Mail</BtnFilledGray>
                )}
            </div>
        </form>
    );
}

export default GenerateMailForm;
