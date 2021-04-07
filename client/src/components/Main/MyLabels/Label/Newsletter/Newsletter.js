import ExampleAvatar from'./assets/example-avatar.png';
import './Newsletter.scss';

const Newsletter = ({ newsletterTitle, newsCount }) => {

    const handleNewsletterClick = (e) => {
        let labelsWrapper = document.querySelector('.my-labels-wrapper');

        const closeAllNews = (el, cls) => {
            el.querySelectorAll('.label-newsletter').forEach(x => x.classList.remove(cls));
        }

        const openNew = (el) => {
            closeAllNews(labelsWrapper, 'open');

            if(!el.classList.contains('open')) el.classList.add('open'); 
        }

        openNew(e.currentTarget);
    }

    return (
        <div className="label-newsletter" onClick={handleNewsletterClick}>
            <div>
                <img className="label-newsletter-avatar" src={ExampleAvatar} alt="Example Avatar"/>
                <span className="label-newsletter-title">{newsletterTitle}</span>
            </div>
            <span className="label-newsletter-counter">{newsCount} new</span>
        </div>
    );
}

export default Newsletter;