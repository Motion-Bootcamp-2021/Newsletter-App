import { ReactComponent as LikeIcon } from '../../../shared/Icons/Like.svg';
import { ReactComponent as CommentIcon} from '../../../Main/shared/assets/comment.svg';
import './CommentActions.scss';

const CommentActions = ({ likesCount, likeHandler }) => {
    return (
        <div className='comment-actions'>
            <div onClick={likeHandler}><LikeIcon /><span className='action-text'>{likesCount} Likes</span></div>
            <div><CommentIcon /><span className='action-text'> 12 Comments</span></div>
            <div>Reply</div>
        </div>
    )
}

export default CommentActions;