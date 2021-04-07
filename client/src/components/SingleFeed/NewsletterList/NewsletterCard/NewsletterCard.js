import { useState } from 'react';

import './NewsletterCard.scss';

const NewsletterCard = () => {
    const [subscribed, setSubscribed] = useState(false);

    return (
        <article className="newsletter-card">
            <section className="newsletter-img-container">
                <img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png" alt="logo"></img>
            </section>

            <section className="newsletter-info-container">
                <h3 className="newsletter-name">Technology</h3>
                <p className="newsletter-description">reddit.com</p>
            </section>

            <section className="newsletter-subscribe-btn-container">
                <button
                    onClick={() => setSubscribed(!subscribed)}
                    className={`btn ${subscribed ? 'unsubscribe-btn' : 'subscribe-btn'}`} >
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </button>
            </section>
        </article>
    );
}

export default NewsletterCard;