import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import App from './App';
import { useState } from 'react';

import Dashboard from './components/Dashboard';
import Explore from './components/Explore';
import Profile from './components/Profile';
import Newsletter from './components/Newsletter';
import Favorites from './components/Favorites';
import Slidebar from './components/Dashboard/Sidebar';
import ReadArticle from './components/ReadArticle';
import FolderShare from './components/FolderShare';
import UserContext from './contexts/UserContext';
import Onboarding from './components/Onboarding';

import ComingSoonIvo from './components/ComingSoon/ComingSoonIvo';
import ComingSoonMit  from './components/ComingSoon/ComingSoonMitNew'
import ComingSoonRado from './components/ComingSoon/ComingSoonRadoNew';
import ComingSoonIP from './components/ComingSoon/ComingSoonIvayloPetrov';


const Navigation = () => {
    const [state, setState] = useState({ name: '' });

    return (
        <UserContext.Provider value={[state, setState]}>
            <Router>
                {/* <Slidebar /> */}
       
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/onboarding" component={Onboarding} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/newsletters/:folderName" component={ReadArticle} />
                    <Route path="/newsletter/test" component={Newsletter} />
                    <Route path="/folder-share" component={FolderShare} />
                    <Route path="/comingsoonmit" component={ComingSoonMit} />
                    <Route path="/coming-soon-rado" component={ComingSoonRado} />
                    <Route path="/comingsoonip" component={ComingSoonIP} />
                    <Route path="/coming-soon-ivo" component={ComingSoonIvo} />
                </Switch>
            </Router>
        </UserContext.Provider>
    )
}

export default Navigation;