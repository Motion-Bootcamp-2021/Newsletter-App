import MyFeeds from '../../Main/MyFeeds';
import MyLabels from '../../Main/MyLabels';
import ReadLaterLink from '../../Main/ReadLaterLink';
import ReadHistoryLink from '../../Main/ReadHistoryLink';
import Header from '../../MainViewHeader/Header';
import Sidebar from '../../shared/Sidebar';
import './MainLayout.scss';

const MainLayout = ({ labels, setLabels, children }) => {
    
    return (
        <div className="main-layout-wrapper">
            <Sidebar>
                <div className="sidebar-content-wrapper">
                    <MyLabels labels={labels} setLabels={setLabels} />
                    <ReadLaterLink />
                    <ReadHistoryLink />
                    <MyFeeds />
                </div>
            </Sidebar>

            <div className="main-layout-prime">
                <Header />

                {children}
            </div>
        </div>
    );
}

export default MainLayout;