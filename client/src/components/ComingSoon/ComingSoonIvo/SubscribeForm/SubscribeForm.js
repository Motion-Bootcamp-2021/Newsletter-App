import { useState } from 'react';
import './SubscribeForm.scss';

function SubscribeForm({setIsSubscribed}) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailValidation();
    }

    const emailValidation = () => {
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!email.match(emailPattern)) {
            setEmailError(true);
            return;
        } else {
            //TODO: Save the email in db
            setIsSubscribed(true);
        }
    }
    
    return(
        <form onSubmit={handleSubmit} className="subscribe-container" autofill="off">
            <input onChange={e => setEmail(e.target.value)} className={emailError ? "email-input invalid" : "email-input"} type="email" value={email} placeholder="Email Address" required/>
            <span className="error-msg"></span>
            <button type="submit" className="subscribe-btn">Subscribe</button>
        </form>
    );
}

export default SubscribeForm;