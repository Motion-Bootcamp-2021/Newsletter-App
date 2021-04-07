import './FolderShare.scss';
import Articles from './Articles';
import FolderShareHeader from './FolderShareHeader';

function FolderShare() {
    return (
        <div className="folder-share">
            <div className="main">
                <h1>Tim Feriss’s Business Newsletters</h1>
                <FolderShareHeader />
                <Articles />
            </div>
        </div>
    );
}
export default FolderShare;
