import { useState } from 'react';
import { connect } from 'react-redux';

import { addFeed } from '../../../actions/feedActions';

import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SaveIcon } from './assets/save-icon.svg';
import { ReactComponent as UploadIcon } from './assets/upload.svg';

import Input from '../../shared/Input';

import './NewFeed.scss';

const NewFeed = ({ setOpen, user, addFeed }) => {
    const [feedName, setFeedName] = useState('');

    const handleChange = (e) => {
        setFeedName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user) {
            user.getIdToken()
                .then((idToken) => addFeed(feedName, idToken))
                .catch(console.log);
        }
    };

    return (
        <div className="new-feed-wrapper">
            <div className="new-feed-container">
                <form className="new-feed-form" onSubmit={handleSubmit}>
                    <div className="new-feed-header">
                        <button className="new-feed-close-btn" type="button" onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </button>
                        <h3 className="new-feed-title">New Feed</h3>
                    </div>

                    <div className="input-container">
                        <div className="name-input-container">
                            <Input type="text" placeholder="Name your Feed" onChange={handleChange} />
                        </div>

                        <div className="drop-zone">
                            <span className="drop-zone__prompt">Drag and drop files here or upload</span>
                            <input type="file" name="myFile" className="drop-zone__input" />
                            <div className="icon-container">
                                <UploadIcon />
                            </div>
                        </div>
                    </div>

                    <button className="new-feed-save-btn">
                        <span className="save-btn-txt">Save</span>
                        <span className="save-btn-icon">
                            <SaveIcon />
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user,
    feeds: state.feed.feeds,
});

const mapDispatchToProps = {
    addFeed,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFeed);
