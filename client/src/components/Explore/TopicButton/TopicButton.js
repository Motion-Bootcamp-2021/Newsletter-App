import './TopicButton.scss';

function TopicButton({ content, selectedTopic, chooseTopic }) {
    return (
        <div className="topic-btn">
            <button type="button"
                onClick={chooseTopic}
                className={selectedTopic === content.toLowerCase() ? 'selected' : null}>{content}</button>
        </div>
    );
}

export default TopicButton;