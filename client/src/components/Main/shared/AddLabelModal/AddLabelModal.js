import { connect } from 'react-redux';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from './assets/close-icon.svg';
import { ReactComponent as SaveIcon } from './assets/save-icon.svg';
import Input, { InputError } from '../../../shared/Input/Input';
import { createLabel } from '../../../../services/userService';
import './AddLabelModal.scss';

const AddLabelModal = ({ isOpen, onCloseClick, labels, setLabels, user }) => {

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

    const handleChange = (e) => {
            
        setNewLabel((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }));
    }

    const submitForm = async e => {
        e.preventDefault();

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
    }

    return (
        <div id="add_label_modal" className={
            isOpen 
            ? 'add-label-modal open' 
            : 'add-label-modal'}
            onClick={onCloseClick}>

            <div id="add_label_modal_content" className="add-label-modal-content">
                <form className="add-label-box" onSubmit={submitForm}>
                    <div className="add-label-header">
                        <button id="add_label_close" className="add-label-close-btn" onClick={onCloseClick}>
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
                        
                    <button id='add_label_save_btn' className="add-label-save-btn" onClick={onCloseClick}>
                        <span className="save-btn-txt">Save</span>
                        <span className="save-btn-icon"><SaveIcon /></span>
                    </button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})
    
export default connect(mapStateToProps, null)(AddLabelModal);