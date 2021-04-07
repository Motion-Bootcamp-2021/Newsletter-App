import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';

function FavouritesLink() {
    return (
        <div className="item">
            <Link to="/favorites">
                <AiIcons.AiFillStar />
                <span>Favorites</span>
            </Link>
        </div>
    );
}

export default FavouritesLink;
