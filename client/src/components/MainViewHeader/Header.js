import { ReactComponent as Search } from './Assets/search.svg';
import { ReactComponent as Copy } from './Assets/copy.svg';
import Input from '../shared/Input';

import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import copyToClipboard from './Helpers/CopyToClipboard';

import './Header.scss';

function Header() {
    const user = useContext(AuthContext);
    const [state, setState] = useState({ emailMask: '' });

    useEffect(() => {
        if (user !== null) {
            user.getIdTokenResult(true)
                .then((res) => {
                    setState((currentState) => ({
                        ...currentState,
                        emailMask: res.claims.emailMask,
                    }));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [user]);
   

    return (
        <div className="header">
            <div className="elements-wrapper">
                <div className="search-wrapper">
                    <Input id="search" type="text" placeholder="Search by topic, website, or RSS link" endText={<Search />} />
                </div>

                <div className="profile-info">
                    <div className="email-wrapper">
                        <label id="header-email" className="email-label">
                            {state.emailMask}
                        </label>

                        <button className="copy-btn" onClick={() => copyToClipboard('header-email')}>
                            <Copy />
                        </button>
                    </div>

                    <div className="avatar-wrapper">
                        <div className="circle">LB</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
