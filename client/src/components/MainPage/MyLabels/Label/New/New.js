import ExampleAvatar from'./assets/example-avatar.png';
import './New.scss';

const New = ({ newTitle, newCounter, newAvatar, newUrl,handleNewClick }) => {
    return (
        <div className="label-new" onClick={handleNewClick}>
            <div>
                <img className="label-new-avatar" src={ExampleAvatar} alt="Example Avatar"/>
                <span className="label-new-title">{newTitle}</span>
            </div>
            <span className="label-new-counter">{newCounter} new</span>
        </div>
    );
}

export default New;