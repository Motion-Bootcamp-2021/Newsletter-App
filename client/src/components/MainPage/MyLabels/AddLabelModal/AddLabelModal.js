import { useState, useContext } from 'react';
import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SaveIcon } from './assets/save-icon.svg';
import Input, { InputError } from '../../../shared/Input/Input';
import { AuthContext } from '../../../../contexts/AuthContext';
import { createLabel } from '../../../../services/userService';
import './AddLabelModal.scss';

const AddLabelModal = ({ toggleModal, labels, setLabels }) => {
    const user = useContext(AuthContext);

    const [newLabel, setNewLabel] = useState({
        labelTitle: '',
        newsletters: []
    });

    const [errState, setErrValues] = useState({
        labelTitleErr: false,
    });

    const handleValidation = (e) => {
        setErrValues((currentErrState) => {
            
            return ({
                ...currentErrState,
                [e.target.name + 'Err']: e.target.value === '' ? 'Empty field!' : false,
            })
        });
    }

    const handleToggleModal = e => {
        e.preventDefault();
        toggleModal();
    }

    const handleChange = (e) => {
            
        setNewLabel((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }));
    }

    const submitForm = async e => {
        e.preventDefault();

        //TODO: Save the data in db
        if(errState.labelTitleErr) return;

        let labelTitle = document.getElementById('labelTitle');
        if(labelTitle.value === '') {
            setErrValues((currentErrState) => ({
                ...currentErrState,
                labelTitleErr: 'Empty field!',
            }));
            
            return;
        }

        if (newLabel.labelTitle && newLabel.labelTitle !== '' && user) {
            const idToken = await user.getIdToken(true);

            createLabel(newLabel, idToken)
                .then(() => {
                    let newArr = [...labels];
                    newArr[newArr.length] = newLabel;
                
                    setLabels(newArr);

                    setNewLabel((currentState) => ({
                        ...currentState,
                        labelTitle: ''
                    }));
                })
                .catch(err => {
                    throw err.message;
                })
        }

        toggleModal();
    }

    return (
        <div id="add_label_modal" className="add-label-modal">
            <div id="modal_content" className="modal-content">
                <form className="add-label-box" onSubmit={submitForm}>
                    <div className="add-label-header">
                        <button id="add_label_close" className="add-label-close-btn" onClick={handleToggleModal}>
                            <CloseIcon />
                        </button>
                        <h3 className="add-label-title">New Label</h3>
                        {
                            errState.labelTitleErr
                            ?   <InputError
                                    id="labelTitle"
                                    type="text"
                                    value={newLabel.labelTitle}
                                    placeholder={errState.labelTitleErr}
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                    />
                            :   <Input
                                    id="labelTitle"
                                    type="text"
                                    value={newLabel.labelTitle}
                                    placeholder="Name your label"
                                    onChange={handleChange}
                                    onBlur={handleValidation}
                                    />
                        }
                    </div>
                        
                    <button className="add-label-save-btn">
                        <span className="save-btn-txt">Save</span>
                        <span className="save-btn-icon"><SaveIcon /></span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddLabelModal;