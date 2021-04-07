import Input, { InputError } from '../../../shared/Input/Input';
import { ReactComponent as AddIcon } from '../../shared/assets/add.svg';
import AddToLabel from './AddToLabel';
import './AddToBoardModal.scss';

const AddToBoardModal = ({ isOpen, onCloseClick, labels, setLabels }) => {
    return (
        <div id="attach_to_board_modal" className={
            isOpen 
            ? 'attach-to-board-modal openModal' 
            : 'attach-to-board-modal'}
            onClick={onCloseClick}
            >

            <div id="modal_content" className="modal-content">

                <div className="attach-to-board-box">

                    <div className="attach-to-board-header">

                        <h3 className="attach-to-board-title">Add to board</h3>
                        
                        <div className="attach-to-board-search">
                            <Input
                                id="labelTitle"
                                type="text"
                                placeholder="Find board"
                                />
                        </div>
                        
                    </div>
                    
                    <div className="attach-to-board-content">
                        <AddToLabel labels={labels}/>
                    </div>
                        
                    <button className="attach-to-board-add-btn" onClick={e => e.preventDefault()}>

                        <span className="add-btn-txt">Create label</span>
                        <span className="add-btn-icon"><AddIcon /></span>

                    </button>

                </div>

            </div>

        </div>
    );
}

export default AddToBoardModal;