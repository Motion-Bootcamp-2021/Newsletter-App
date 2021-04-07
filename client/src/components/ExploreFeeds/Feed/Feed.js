import { useHistory, Link } from 'react-router-dom';

import { ReactComponent as Edit } from '../assets/edit.svg';
import { ReactComponent as Hide } from '../assets/hide.svg';
import { ReactComponent as Delete } from '../assets/delete.svg';

import './Feed.scss';

const Feed = ({ id, name, sources, admin }) => {
    const url = `/feed/${id}`;

    return (
        <Link to={url}>
            <div className="feed-container">
                <div className="img-container">
                    <img src="https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png" alt="logo"></img>
                </div>

                <div className="props-container">
                    <h3>{name}</h3>

                    <div className="sources-and-admin-actions">
                        <p>{sources} sources</p>

                        {admin && (
                            <div className="admin-actions">
                                <li>
                                    <Edit />
                                </li>
                                <li>
                                    <Hide />
                                </li>
                                <li>
                                    <Delete />
                                </li>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Feed;
