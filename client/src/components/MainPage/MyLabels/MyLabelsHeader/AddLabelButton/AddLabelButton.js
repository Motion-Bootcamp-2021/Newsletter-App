import { ReactComponent as PlusIcon } from './assets/plus-icon.svg';
import './AddLabelButton.scss';

const AddLabelButton = ({ toggleModal }) => {
    return (
        <button className="add-label-btn" onClick={toggleModal}>
            <PlusIcon />
        </button>
    );
}

export default AddLabelButton;