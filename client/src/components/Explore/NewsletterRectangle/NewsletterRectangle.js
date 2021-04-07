import './NewsletterRectangle.scss';

function NewsletterRectangle({ newsletter }) {
    return (
        <div className="newsletter-rectangle">
            <article className="article">
                <div className="square"></div>

                <h3>{newsletter.name}</h3>

                <p>{newsletter.description}</p>

                <button type="button">Subscribe</button>
            </article>
        </div>
    );
}

export default NewsletterRectangle;
