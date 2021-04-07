import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './NewsletterCard.scss';

const NewsletterCard = ({ labels, newsletter, setAddToLabelOpen }) => {
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        if (labels.some(x => x.newsletters.some(y => y._id === newsletter._id))) {
            setSubscribed(true);
        } else {
            setSubscribed(false);
        }
    }, [labels, newsletter]);

    return (
        <article className="newsletter-card">
            <section className="newsletter-img-container">
                <img src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" alt="logo"></img>
            </section>

            <section className="newsletter-info-container">
                <h3 className="newsletter-name">{newsletter.name}</h3>
                <p className="newsletter-description">{newsletter.address}</p>
            </section>

            <section className="newsletter-subscribe-btn-container">
                <button
                    onClick={() => setAddToLabelOpen(newsletter._id)}
                    className={`btn ${subscribed ? 'unsubscribe-btn' : 'subscribe-btn'}`} >
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </button>
            </section>
        </article>
    );
}

const mapStateToProps = (state) => ({
    labels: state.label.labels
})

export default connect(mapStateToProps, null)(NewsletterCard);