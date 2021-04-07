import { useLocation } from 'react-router-dom';
import MainPage from '../../MainPage/MainPage';
import MyFeeds from '../../MainPage/MyFeeds';
import MyLabels from '../../MainPage/MyLabels';
import ReadHistory from '../../MainPage/ReadHistory';
import ReadLater from '../../MainPage/ReadLater';
import Header from '../../MainViewHeader/Header';
import ReadLaterPage from '../../ReadLaterPage';
import Sidebar from '../../shared/Sidebar';
import './MainLayout.scss';

const MainLayout = () => {
    const location = useLocation();

    const getPage = () => {
        switch (location.pathname) {
            case '/main':
                return <MainPage />
            case '/read-later':
                return <ReadLaterPage />
            default:
                return null;
        }
    }

    return (
        <div className="main-layout-wrapper">
            <Sidebar>
                <div className="sidebar-content-wrapper">
                    <MyLabels />
                    <ReadLater />
                    <ReadHistory />
                    <MyFeeds />
                </div>
            </Sidebar>

            <div className="main-layout-prime">
                <Header />

                {getPage()}
            </div>
        </div>
    );
}

export default MainLayout;