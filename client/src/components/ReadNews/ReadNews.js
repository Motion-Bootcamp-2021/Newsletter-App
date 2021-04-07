import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { BtnFilledGreen, BtnOutlineGreen } from '../shared/Buttons/BaseBtn/BaseBtn';
import ReadNewsHeader from './ReadNewsHeader';
import ReadNewsOptionsMenu from './ReadNewsOptionsMenu';
import { getNews } from '../../services/newsService';
import { markNewsAsRead, markNewsReadLater } from '../../services/userService';
import { unsubscribeFromNewsletterInAllLabels } from '../../services/labelService';
import Article from './Article';

import './ReadNews.scss';
import YesNoModal from '../shared/YesNoModal';

const ReadNews = ({ user, match }) => {
    const [news, setNews] = useState({title:'', content:'', readingTime:'', newsletter: {name:''}});
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if(user) {
            user.getIdToken()
            .then(async idToken => {
                    const newsId = match.params.id;
                    markNewsAsRead(newsId, idToken);
                    return getNews(newsId, idToken); 
                })
            .then(res => res.json())
            .then(setNews)
                .catch(err => console.log(err));
        }
    }, [user, match]);

    const onMarkNewsReadLater = () => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    await markNewsReadLater([match.params.id], idToken);
                })
                .catch(err => console.log(err));
        }
    }

    const yesNoMenuOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    const confirmUnsubscribeHandler = () => {
        if(user) {
            user.getIdToken()
                .then(async idToken => {
                    await unsubscribeFromNewsletterInAllLabels(news.newsletter._id, idToken);
                })
        }
        history.push('/explore-feeds');
    }
    
    return (
        <div className='article'>
        <ReadNewsHeader newsletterName={news.newsletter.name} yesNoMenuOpenHandler={yesNoMenuOpenHandler} />
            <div className='article-body'>
                <aside className='article-menu'>
                    <ReadNewsOptionsMenu 
                        onMarkNewsReadLater={onMarkNewsReadLater} 
                        title={news.title} />
                </aside>
                <main className='article-main'>
                    <YesNoModal 
                    question={`Are you sure want to unsubscribe from ${news.newsletter.name}?`}
                    firstBtnText='Unsubscribe'
                    secondBtnText='Stay Subscribed'
                    isOpen={isOpen}
                    yesNoMenuOpenHandler={yesNoMenuOpenHandler}
                    confirmHandler={confirmUnsubscribeHandler} />

                    {
                        (news.title && news.contentHtml)
                        ? <Article news = {news} />
                        : null
                    }  
                    <div className='article-buttons'>
                        <BtnOutlineGreen onClick={()=>{history.push("/explore-feeds")}}>BACK TO FEEDS</BtnOutlineGreen>
                        <BtnFilledGreen onClick={()=>{history.push(`/main/${news.newsletter._id}`)}} className='sign-btn-green'>MORE FROM {news.newsletter.name.substring(0,3)}</BtnFilledGreen>
                    </div>
                </main>
                <aside className='artivle-chat'></aside>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, null)(ReadNews);