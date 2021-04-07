import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { BtnFilledGreen, BtnOutlineGreen } from '../shared/Buttons/BaseBtn/BaseBtn';
import ReadNewsHeader from './ReadNewsHeader';
import ReadNewsOptionsMenu from './ReadNewsOptionsMenu';
import Comment from './Comments/Comment';
import { getNews } from '../../services/newsService';
import { markNewsAsRead, markNewsReadLater } from '../../services/userService';
import { unsubscribeFromNewsletterInAllLabels } from '../../services/labelService';
import { getComments } from '../../services/commentService';
import Article from './Article';

import AddComment from './Comments/AddComment';
import EditComment from './Comments/EditComment';
import YesNoModal from '../shared/YesNoModal';

import './ReadNews.scss';

const ReadNews = ({ user, match, userId }) => {
    const [news, setNews] = useState({title:'', content:'', readingTime:'', newsletter: {name:''}});
    const [comments, setComments] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const [currentContent, setCurrentContent] = useState('');
    const [currentRating, setCurrentRating] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)
    const [isCommentEditModalOpen, setIsCommentEditModalOpen] = useState(false)
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

    useEffect(() => {
        if(user) {
            user.getIdToken()
            .then(async idToken => {
                const newsId = match.params.id
                return getComments(newsId, idToken);
            })
            .then(res=>res.json())
            .then(setComments) 
            .catch(err => console.log(err))
        }
    }, [user, isCommentEditModalOpen, isCommentModalOpen])

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

    const commentInputModalOpenHandler = () => {
        setCommentId('1')
        setIsCommentModalOpen(!isCommentModalOpen);
        if(!isCommentModalOpen){
            setCommentId(null)
        }
    }

    const commentEditHandler = async (props) => {  
        setCommentId(props.commentId)
        setCurrentContent(props.content)
        setCurrentRating(props.rating)
        setIsCommentEditModalOpen(!isCommentEditModalOpen)
    }
   
    const commentCloseEditModal = () => {  
        setIsCommentEditModalOpen(!isCommentEditModalOpen)
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
                        commentInputModalOpenHandler={commentInputModalOpenHandler}
                        title={news.title} />
                </aside>
                <main className='article-main'>
                    <AddComment
                        isCommentModalOpen={isCommentModalOpen}
                        commentInputModalOpenHandler={commentInputModalOpenHandler}
                        newsId={news._id}
                        user={user}
                    />
                    <EditComment
                        isCommentModalOpen={isCommentEditModalOpen}
                        commentEditModalOpenHandler={commentCloseEditModal}
                        user={user}
                        commentId={commentId}
                        content={currentContent}
                        rating={currentRating}
                    />
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
                        : <div className='loading-text'>Loading ...</div>
                    }  
                    <div className='article-buttons'>
                        <BtnOutlineGreen onClick={()=>{history.push("/explore-feeds")}}>BACK TO FEEDS</BtnOutlineGreen>
                        <BtnFilledGreen onClick={()=>{history.push(`/main/${news.newsletter._id}`)}} className='sign-btn-green'>MORE FROM {news.newsletter.name.substring(0,3)}</BtnFilledGreen>
                    </div>
                </main>
                <aside className='article-chat'>
                    { 
                        comments && comments.map(x => { 
    
                        return <Comment 
                            commentId={x._id}
                            key={x._id}
                            authorId = {x.author._id}
                            author={`${x.author.firstName} ${x.author.lastName}`}
                            publicationDate={x.publicationDate}
                            content={x.content}
                            likes={x.likes ? x.likes : '0'}
                            rating={x.rating}
                            avatar={`${x.author.firstName.substring(0,1)}${x.author.lastName.substring(0,1)}`}
                            userId={userId}
                            editionDate={x.editionDate}
                            commentEditHandler={commentEditHandler}
                        />})
                    }
                </aside>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user.user,
    userId: state.user.userId
});

export default connect(mapStateToProps, null)(ReadNews);