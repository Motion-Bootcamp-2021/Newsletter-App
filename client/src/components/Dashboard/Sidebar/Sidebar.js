import { useState } from 'react';
import ExploreLink from './ExploreLink';
import FavouritesLink from './FavouritesLink';
import NewslettersLink from './NewslettersLink';
import ProfileLink from './ProfileLink';
import './Sidebar.scss';

function Slidebar() {
    const [sideBar, setSidebar] = useState(false);

    const toggleSidebar = () => setSidebar(!sideBar);

    return (
        <>
            <div className="sidebar">
                <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <div className="scriber">Scriber</div>

                    <div className="multi-level">
                        <ExploreLink />
                        <FavouritesLink />
                        <NewslettersLink />
                        <ProfileLink />
                        
                        <div className="toggleMenu">
                            <input type="checkbox" id="menu" onClick={toggleSidebar}/>
                            <label htmlFor="menu" className="icon">
                                <div className="menu"></div>
                            </label>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Slidebar;