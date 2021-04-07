import { connect } from 'react-redux';

import { ReactComponent as Search } from './Assets/search.svg';
import { ReactComponent as Copy } from './Assets/copy.svg';
import Input from '../shared/Input';

import copyToClipboard from './Helpers/CopyToClipboard';

import './Header.scss';

function Header({ emailMask }) {

    return (
        <div className="header">
            <div className="elements-wrapper">
                <div className="search-wrapper">
                    <Input id="search" type="text" placeholder="Search by topic, website, or RSS link" endText={<Search />} />
                </div>

                <div className="profile-info">
                    <div className="email-wrapper">
                        <label id="header-email" className="email-label">
                            {emailMask}
                        </label>

                        <button className="copy-btn" onClick={() => copyToClipboard('header-email')}>
                            <Copy />
                        </button>
                    </div>

                    <div className="avatar-wrapper">
                        <div className="circle">LB</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    emailMask: state.user.emailMask,
})

export default connect(mapStateToProps)(Header);
