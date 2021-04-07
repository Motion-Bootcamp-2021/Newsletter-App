import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import ChangeViewDropDown from './ChangeViewDropDown';
import TitleView from './TitleView';
import MagazineView from './MagazineView';
import CardView from './CardView';
import { getNewsletter } from '../../actions/newsletterActions';
import { getLabels, hideNews } from '../../services/userService';
import transformNewsletterNews from '../../helpers/transformNewsletterNews';

import './Main.scss';

const Main = ({ user, newsletter, getNewsletter, newsIdArrayToHide }) => {
    const [news, setNews] = useState(null);
    const [labels, setLabels] = useState(null);

    const [view, setView] = useState('magazineView');

    const _id = '603e3ee325ed918cd7ca96e9';

    let history = useHistory();

    if(!user) {
        history.push('/');
    }

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(idToken => getNewsletter(_id, idToken))
                .catch(console.log);
        }
    }, [_id, user, getNewsletter]);

    useEffect(() => {
        const data = transformNewsletterNews(newsletter.news);
        setNews(data);
    }, [newsletter]);

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(idToken => getLabels(idToken))
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        throw data.error;
                    }

                    setLabels(data);
                })
                .catch(err => console.log(err));
        }
    }, [user])

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    if(newsIdArrayToHide) {
                        await hideNews(newsIdArrayToHide, idToken);
                        await getNewsletter(_id, idToken);
                    }
                })
                .catch(err => console.log(err));
        }
    }, [newsIdArrayToHide])

    const viewStyle = {
        magazineView: MagazineView,
        cardView: CardView,
        titleOnlyView: TitleView,
    }

    const PageView = viewStyle[view]

    return (
        <MainLayout labels={labels} setLabels={setLabels}>
            <main className="main-wrapper">
                <section className='main-title'>
                    <h1>Main Page</h1>
                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown view={view} setView={setView} className="change-view-dropdown" />
                    </div>
                </section>

                <h2>{newsletter && newsletter.name}</h2>

                <section className="view-wrapper">
                    <PageView news={news} labels={labels && labels} setLabels={setLabels}/>
                </section>
            </main>
        </MainLayout>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
    newsletter: state.newsletter.newsletter,
    newsIdArrayToHide: state.newsletter.newsIdArrayToHide,
})

const mapDispatchToProps = {
    getNewsletter
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
