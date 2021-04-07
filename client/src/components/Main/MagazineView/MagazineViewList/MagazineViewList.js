import { useState } from 'react';
import NewsOptions from '../../shared/NewsOptions';
import MagazineViewCard from './MagazineViewCard';
import AddToBoardModal from '../../shared/AddToBoardModal';

import './MagazineViewList.scss';

const MagazineViewList = ({ binder, news, labels, setLabels }) => {
    const [selectedNews, setSelectedNews] = useState([]);
    const [confirmDialogueIsOpen, setConfirmDialogueIsOpen] = useState(false);

    const addToSelected = (id) => {
        if (!selectedNews.includes(id)) {
            setSelectedNews(selectedNews.concat([id]));
        }
    }

    const removeFromSelected = (id) => {
        setSelectedNews(selectedNews.filter(x => x !== id));
    }

    const confirmDialogueCloseClick = (e) => {
        if(e.target.id === 'attach_to_board_modal' || e.target.id === 'modal_content') {
            confirmDialogueIsOpen ? setConfirmDialogueIsOpen(false) : setConfirmDialogueIsOpen(true);
        }
    }

    return (
        <div className="magazine-view-list">

            <AddToBoardModal
                isOpen={confirmDialogueIsOpen}
                onCloseClick={confirmDialogueCloseClick}
                labels={labels}
                setLabels={setLabels}/>

            <header className="magazine-view-list-header">
                <p className="binder">{binder}</p>
                {
                    selectedNews.length > 0 &&
                    <NewsOptions 
                        selectedNews={selectedNews}
                        setSelectedNews={setSelectedNews}
                        news={news} 
                        labels={labels}
                        setLabels={setLabels}
                        confirmDialogueIsOpen={confirmDialogueIsOpen}
                        setConfirmDialogueIsOpen={setConfirmDialogueIsOpen}/>
                }
            </header>

            <div className="magazine-view-cards-container">
                {
                    news && news.map(x => <MagazineViewCard
                        key={x._id}
                        news={x}
                        addToSelected={addToSelected}
                        removeFromSelected={removeFromSelected}
                        selected={selectedNews.includes(x._id)} />)
                }
            </div>
        </div>
    );
}

export default MagazineViewList;