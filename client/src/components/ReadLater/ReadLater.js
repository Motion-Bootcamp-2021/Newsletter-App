import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ChangeViewDropDown from '../Main/ChangeViewDropDown';
import MagazineView from '../Main/MagazineView';
import CardView from '../Main/CardView';
import TitleView from '../Main/TitleView';
import { getReadLater } from '../../actions/userActions';
import MainLayout from '../layouts/MainLayout/MainLayout';
import transformReadLaterNews from '../../helpers/transformReadLaterNews';
import './ReadLater.scss';

const ReadLater = ({ user, readLaterNews, getReadLater }) => {
    const [news, setNews] = useState(transformReadLaterNews(readLaterNews));
    const [view, setView] = useState('magazineView');

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(getReadLater)
                .catch(err => console.log(err));
        }
    }, [user, getReadLater])

    useEffect(() => {
        const data = transformReadLaterNews(readLaterNews);
        setNews(data);
    }, [readLaterNews])

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const viewStyle = {
        magazineView: MagazineView,
        cardView: CardView,
        titleOnlyView: TitleView,
    }

    const PageView = viewStyle[view];

    return (
        <MainLayout>
            <main className="read-later-main">
                <section className='read-later-title'>
                    <h1>Read Later</h1>
                    <div className="change-view-dropdown-container">
                        <ChangeViewDropDown view={view} setView={setView} className="change-view-dropdown" />
                    </div>
                </section>

                <section className="read-later-view">
                    <PageView news={news} />
                </section>
            </main>
        </MainLayout >
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
    readLaterNews: state.user.readLaterNews
})

const mapDispatchToProps = {
    getReadLater
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadLater);