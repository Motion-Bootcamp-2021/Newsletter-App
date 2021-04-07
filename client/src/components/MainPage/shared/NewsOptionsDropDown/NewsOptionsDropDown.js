import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as Hide } from '../assets/hide.svg';
import { ReactComponent as Openbook } from '../assets/openbook.svg';
import { ReactComponent as MoreIcon } from '../assets/more-vertical.svg';
import { markNewsReadLater } from '../../../../services/userService';
import { AuthContext } from '../../../../contexts/AuthContext';
import { useContext } from 'react';

import './NewsOptionsDropDown.scss';

const NewsOptionsDropDown = ({ id }) => {
    const user = useContext(AuthContext);

    const handleAction = (e) => {
        if (e.target.id === "hide") {
            console.log(`${id} - ${e.target.id} - Hide`)
        } else {
            console.log(`${id} - ${e.target.id} - Mark as read`)
        }
    }

    const onMarkNewsReadLater = () => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    await markNewsReadLater([id], idToken);
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="news-options-dropdown">
            <span className="news-options-icon"><MoreIcon /></span>
            <ul className="news-options-dropdown-content">
                <li onClick={onMarkNewsReadLater} id="readLater"><span><Bookmark /></span> Read Later</li>
                <li onClick={handleAction} id="hide"><span><Hide /></span> Hide</li>
                <li onClick={handleAction} id="markAsRead"><span><Openbook /></span> Mark as read</li>
            </ul>
        </div>
    )
}

export default NewsOptionsDropDown;