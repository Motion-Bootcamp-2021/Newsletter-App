import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Dashboard.scss';
import Slidebar from './Sidebar';
import Explore from '../Explore';
import Profile from '../Profile';
import Favorites from '../Favorites';
import ReadArticle from '../ReadArticle';



function Dashboard() {
    return (
        <div className="dashboard">
            <>
            <Router>
                <Slidebar />
                <Switch>
                    <Route path="/explore" component={Explore} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/newsletters/:folderName" component={ReadArticle} />
                </Switch>
            </Router>
            </>
        </div>
    );
}

export default Dashboard;