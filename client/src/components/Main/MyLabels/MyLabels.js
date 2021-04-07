import { useState } from 'react';
import { connect } from 'react-redux';
import AddLabelModal from '../shared/AddLabelModal';
import MyLabelsHeader from './MyLabelsHeader';
import Label from './Label';
import './MyLabels.scss';

const MyLabels = ({ labels, setLabels }) => {
    const [confirmDialogueIsOpen, setConfirmDialogueIsOpen] = useState(false);

    const confirmDialogueCloseClick = (e) => {
        if(e.target.id === 'add_label_modal' ||
            e.target.id === 'add_label_modal_content' ||
            e.currentTarget.id === 'add_label_close' ||
            e.target.id === 'add_label_save_btn') {
            confirmDialogueIsOpen ? setConfirmDialogueIsOpen(false) : setConfirmDialogueIsOpen(true);
        }
    }

    return (
        <div className="my-labels-wrapper">
            <AddLabelModal 
                isOpen={confirmDialogueIsOpen}
                onCloseClick={confirmDialogueCloseClick}
                labels={labels}
                setLabels={setLabels}/>

            <MyLabelsHeader setConfirmDialogueIsOpen={setConfirmDialogueIsOpen}/>

            {
            labels && labels
                .map((label, index) => 
                        (
                            <Label
                                key={index}
                                labelTitle={label.labelTitle}
                                newsCounter={label.newsCounter}
                                newsletters={label.newsletters} />
                        )
                    )
            }
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})
    
export default connect(mapStateToProps, null)(MyLabels);
