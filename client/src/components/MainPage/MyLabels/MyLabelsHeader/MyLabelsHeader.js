import AddLabelButton from './AddLabelButton/AddLabelButton';
import SettingsButton from './SettingsButton/SettingsButton';
import './MyLabelsHeader.scss';

const MyLabelsHeader = ({ toggleModal }) => {
    return (
        <div className="my-labels-header">
            <span className="my-labels-title">My Labels</span>
            
            <div className="my-labels-btns">
                <AddLabelButton toggleModal={toggleModal} />

                <SettingsButton />
            </div>
        </div>
    );
}

export default MyLabelsHeader;