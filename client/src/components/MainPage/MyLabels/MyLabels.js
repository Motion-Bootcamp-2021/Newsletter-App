import { useState, useContext, useEffect } from 'react';
import AddLabelModal from './AddLabelModal';
import MyLabelsHeader from './MyLabelsHeader';
import Label from './Label';
import { AuthContext } from '../../../contexts/AuthContext';
import { getLabels } from '../../../services/userService';
import './MyLabels.scss';

const MyLabels = () => {
    const user = useContext(AuthContext);
    const [labels, setLabels] = useState(null);

    useEffect(() => {
        if (user) {
            user.getIdToken()
                .then(idToken => {
                    getLabels(idToken)
                        .then(res => res.json())
                        .then(data => {
                            if (data.error) {
                                throw data.error;
                            }

                            setLabels(data);
                        })
                        .catch(err => alert(err));
                })
                .catch(err => console.log(err));
        }
    }, [user])

    const toggleModal = (e) => {
        let modal = document.getElementById('add_label_modal');
        
        if(modal.classList.contains('open')) {
            modal.classList.remove('open');
        } else {
            modal.classList.add('open')
        }
        
    }

    const handleLabelHeaderClick = (e) => {
        const closeAllLabels = (el, cls) => {
            el.querySelectorAll('.label-wrapper').forEach(x => x.classList.remove(cls));
        }

        const openLabel = (el) => {
            let labelsWrapper = document.querySelector('.my-labels-wrapper');
        
            if(el.classList.contains('open')) {
                el.classList.remove('open')
            } else {
                closeAllLabels(labelsWrapper, 'open');
                el.classList.add('open');
            }
        }

        openLabel(e.currentTarget.parentElement) 
    }

    const handleNewClick = (e) => {
        const closeAllNews = (el, cls) => {
            el.querySelectorAll('.label-new').forEach(x => x.classList.remove(cls));
        }

        const openNew = (el) => {
            let labelsWrapper = document.querySelector('.my-labels-wrapper');
            closeAllNews(labelsWrapper, 'open');

            if(!el.classList.contains('open')) el.classList.add('open'); 
        }

        openNew(e.currentTarget);
    }

    return (
        <div className="my-labels-wrapper">
            <AddLabelModal toggleModal={toggleModal} labels={labels} setLabels={setLabels}/>

            <MyLabelsHeader toggleModal={toggleModal}/>

            {
            labels && labels
                .map((label, index) => 
                        (
                            <Label
                                key={index}
                                labelTitle={label.labelTitle}
                                newsCounter={label.newsCounter}
                                newsletters={label.newsletters}
                                handleLabelHeaderClick={handleLabelHeaderClick}
                                handleNewClick={handleNewClick}/>
                        )
                    )
            }
        </div>
    );
}

export default MyLabels;