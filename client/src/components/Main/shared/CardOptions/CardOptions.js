import { ReactComponent as StarIcon } from '../assets/star.svg';
import { ReactComponent as ShareIcon } from '../assets/share.svg';
import NewsOptionsDropDown from '../NewsOptionsDropDown';
import './CardOptions.scss';

const CardOptions = ({ id }) => {
    return (
        <section className="news-card-options">
            <StarIcon />
            <ShareIcon />
            <NewsOptionsDropDown id={id} />
        </section>
    );
}

export default CardOptions;