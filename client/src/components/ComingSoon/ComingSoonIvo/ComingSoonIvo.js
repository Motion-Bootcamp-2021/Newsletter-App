import { useState } from 'react';
import ComingSoonHeader from './ComingSoonHeader';
import SubscribeForm from './SubscribeForm';
import Features from './Features';
import './ComingSoonIvo.scss';

function ComingSoonIvo() {
    const [isSubscribed, setIsSubscribed] = useState(false);

    return(
        <div className="coming-soon-ivo">

            <div className="coming-soon-header-wrapper">
                <ComingSoonHeader />
            </div>

            <div className="coming-soon-content-wrapper">
                <main className="coming-soon-content">

                    { isSubscribed ? 
                        (
                            <>
                                <h1 className="content-title">Thank you for joining our community</h1>
                                <h2 className="content-message subscribed">You should receive a <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">confirmation email</a> soon.</h2>
                            </>)
                        : 
                        (
                            <>
                                <h1 className="content-title">Bring back the joy of reading newsletters</h1>
                                <h2 className="content-message">Discover, subscribe and manage email newsletters in one place.</h2>
                                <SubscribeForm 
                                    setIsSubscribed={setIsSubscribed}
                                />
                            </>)
                    }

                    <Features />
                </main>
            </div>
            
        </div>
    );
}

export default ComingSoonIvo;