import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


function ExploreLink() {
    return (
        <div className="item">
            <Link to="/explore">
                <FaIcons.FaSafari />
                <span>Explore</span>
            </Link>
        </div>
    );
}

export default ExploreLink;
