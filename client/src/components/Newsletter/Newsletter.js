import NewsletterBody from './NewsletterBody';
import RelatedNews from './RelatedNews';
import './Newsletters.scss';

function Newsletter() {
    return (
        <>
            <section className="newsletter-page">
                <div className="main">
                    <button className="go-back">Go Back</button>
                    <h1>Morning Brew</h1>
                    <NewsletterBody />
                    <RelatedNews />
                </div>
            </section>
        </>
    );
}
export default Newsletter;
