import { useState, useContext, useEffect } from 'react';
import ChangeViewDropDown from '../MainPage/ChangeViewDropDown';
import MainPageContext from '../../contexts/MainPageContext';
import MagazineView from '../MainPage/MagazineView';
import CardView from '../MainPage/CardView';
import TitleView from '../MainPage/TitleView';
import { AuthContext } from '../../contexts/AuthContext';
import { getReadLaterNews } from '../../services/userService';
import './ReadLaterPage.scss';

const ReadLaterPage = () => {
    const user = useContext(AuthContext);
    const [news, setNews] = useState(null);

    const [mainPageState, setMainPageState] = useState({
        pageView: 'magazineView'
    });

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(idToken => {
                    getReadLaterNews(idToken)
                        .then(res => res.json())
                        .then(data => {
                            if (data.error) {
                                throw data.error;
                            }
                            const news = data.reverse().reduce((acc, cur) => {
                                if (acc.has('LATEST')) {
                                    const curNews = acc.get('LATEST');
                                    curNews.push(cur);
                                } else {
                                    acc.set('LATEST', [cur]);
                                }
                                return acc;
                            }, new Map());

                            setNews(news);
                        })
                        .catch(err => alert(err));
                })
                .catch(err => console.log(err));
        }
    }, [user])

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const ViewStyle = () => {

        switch (mainPageState.pageView) {
            case 'magazineView':
                return <MagazineView news={news} />

            case 'cardView':
                return <CardView news={news} />

            case 'titleOnlyView':
                return <TitleView news={news} />

            default:
                return <MagazineView news={news} />
        }
    }

    return (
        <MainPageContext.Provider value={[mainPageState, setMainPageState]}>
            <main className="read-later-main">
                <section className='read-later-title'>
                    <h1>Read Later</h1>
                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown className="change-view-dropdown" />
                    </div>
                </section>

                <section className="read-later-view">
                    {ViewStyle()}
                </section>
            </main>
        </MainPageContext.Provider>
    );
}

export default ReadLaterPage;