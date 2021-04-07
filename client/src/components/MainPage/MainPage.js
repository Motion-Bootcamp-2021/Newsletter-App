import { useContext, useEffect, useState } from 'react';
import ChangeViewDropDown from './ChangeViewDropDown';
import MainPageContext from '../../contexts/MainPageContext';
import TitleView from './TitleView';
import MagazineView from './MagazineView';
import CardView from './CardView';
import { getOneNewsletter } from '../../services/newsletterService';
import { AuthContext } from '../../contexts/AuthContext';
import './MainPage.scss';

const MainPage = () => {
    const user = useContext(AuthContext);
    const [newsletter, setNewsletter] = useState(null);
    const [news, setNews] = useState(null);

    const [mainPageState, setMainPageState] = useState({
        pageView: 'magazineView',
        todayNews: [],
        prevDayNews: []
    })

    const _id = '603e3ee325ed918cd7ca96e9';
    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(idToken => {

                    getOneNewsletter(_id, idToken)
                        .then(res => res.json())
                        .then(data => {
                            if (data.error) {
                                throw (data.error);
                            }
                            setNewsletter(data);
                        })
                        .catch(err => alert(err));

                })
                .catch(err => console.log(err));
        }
    }, [_id, user]);

    useEffect(() => {
        if (newsletter) {
            const news = newsletter.news.sort((a, b) => new Date(b.date) - new Date(a.date))
                .reduce((acc, cur) => {
                    const date = new Date(cur.date.split('T')[0]).toDateString().substring(4);

                    if (acc.has(date)) {
                        const currDate = acc.get(date);
                        currDate.push(cur);
                    } else {
                        acc.set(date, [cur]);
                    }

                    return acc;
                }, new Map());

            setNews(news);
        }
    }, [newsletter]);

    const ChangeViewStyle = () => {

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
            <main className="main-wrapper">
                <section className='main-title'>
                    <h1>Main Page</h1>
                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown className="change-view-dropdown" />
                    </div>
                </section>

                <h2>{newsletter && newsletter.name}</h2>

                <section className="view-wrapper">
                    {ChangeViewStyle()}
                </section>
            </main>
        </MainPageContext.Provider>
    );
}

export default MainPage;