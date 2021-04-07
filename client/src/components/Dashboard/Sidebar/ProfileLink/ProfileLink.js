import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';

function ProfileLink() {
    return (
        <div className="item profile">
            <Link to="/profile">
                <IoIcons.IoMdPerson />
                <span>Profile</span>
                <span className="email">example@gmail.com</span>
            </Link>
        </div>
    );
}

export default ProfileLink;
