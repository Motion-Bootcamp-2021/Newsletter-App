import { useState, useEffect } from 'react';
import Comment from './Comment';
import { getComments } from '../../../services/commentService';
import EditComment from './EditComment';

const Comments = ({user, newsId, userId, isCommentModalOpen}) => {
    const [comments, setComments] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const [currentContent, setCurrentContent] = useState('');
    const [currentRating, setCurrentRating] = useState(null); 
    const [isCommentEditModalOpen, setIsCommentEditModalOpen] = useState(false)

    useEffect(() => {
        if(user) {
            user.getIdToken()
            .then(async idToken => {
                return getComments(newsId, idToken);
            })
            .then(res=>res.json())
            .then(setComments) 
            .catch(err => console.log(err))
        }
    }, [user, isCommentEditModalOpen, isCommentModalOpen])

    const commentEditHandler = async (props) => {  
        setCommentId(props.commentId)
        setCurrentContent(props.content)
        setCurrentRating(props.rating)
        setIsCommentEditModalOpen(!isCommentEditModalOpen)
    }
   
    const commentCloseEditModal = () => {  
        setIsCommentEditModalOpen(!isCommentEditModalOpen)
    }
    return(
        <main className='article-main'>

        <EditComment
            isCommentModalOpen={isCommentEditModalOpen}
            commentEditModalOpenHandler={commentCloseEditModal}
            user={user}
            commentId={commentId}
            content={currentContent}
            rating={currentRating}
        />
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
        </main>
    )
}

export default Comments