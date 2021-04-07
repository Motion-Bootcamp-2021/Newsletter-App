import NewsletterCard from './NewsletterCard/NewsletterCard';
import './NewsletterList.scss';

const NewsletterList = () => {
    return (
        <div className="newsletter-list-container">
            <NewsletterCard/>
            <NewsletterCard/>
            <NewsletterCard/>
            <NewsletterCard/>
            <NewsletterCard/>
            <NewsletterCard/>
            <NewsletterCard/>
            <NewsletterCard/>
        </div>
    );
}

export default NewsletterList;