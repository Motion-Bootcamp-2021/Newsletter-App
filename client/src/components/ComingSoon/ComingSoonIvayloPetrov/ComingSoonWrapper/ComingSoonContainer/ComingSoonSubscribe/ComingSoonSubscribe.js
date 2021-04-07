import './ComingSoonSubscribe.scss';

const ComingSoonSubscribe = ({ setSubscribed }) => {
    return (
        <div className="coming-soon-subscribe">
            <p>Discover, subscribe and manage email newsletters in one place.</p>

            <div className="coming-soon-subscribe-input">
                <input type="email" placeholder="Email Address" />
                <button onClick={() => setSubscribed(true)} type="button">Subscribe</button>
            </div>
        </div>
    )
}

export default ComingSoonSubscribe;