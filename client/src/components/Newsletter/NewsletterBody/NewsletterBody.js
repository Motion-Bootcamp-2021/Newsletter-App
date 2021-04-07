import avatar from '../assets/images/email-avatar.png';

function NewsletterBody() {
    return (
        <div className="msg-body">
            <span className="avatar">
                <img src={avatar} alt="Sender's Avatar"/>
            </span>
            <p className="msg-text">
                New York (CNN Business)It's been seven years since Microsoft
                released the Xbox One, the last major generational upgrade to its Xbox
                series. Now, over a year after the company first announced its
                next-generation console was coming, it's finally here.
            </p>

            <div className="msg-footer">
                <span className="msg-topic">News / Technology</span>
                <button className="msg-subscribe">Subscribe</button>
            </div>
        </div>
    );
}

export default NewsletterBody;
