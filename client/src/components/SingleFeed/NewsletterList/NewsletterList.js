import { useState } from 'react';
import NewsletterCard from './NewsletterCard/NewsletterCard';
import AddToBoardModal from '../../Main/shared/AddToBoardModal';
import AddLabelModal from '../../Main/shared/AddLabelModal';
import './NewsletterList.scss';

const NewsletterList = ({ newsletters }) => {
    const [addToLabelOpen, setAddToLabelOpen] = useState(false);
    const [createLabelOpen, setCreateLabelOpen] = useState(false);

    return (
        <div className="newsletter-list-container">
            <AddToBoardModal
                isOpen={addToLabelOpen}
                onCloseClick={() => setAddToLabelOpen(false)}
                setCreateLabelOpen={setCreateLabelOpen}
            />

            <AddLabelModal 
                isOpen={createLabelOpen}
                onCloseClick={() => setCreateLabelOpen(false)}
            />

            {newsletters.map(x => <NewsletterCard key={x._id} newsletter={x} setAddToLabelOpen={setAddToLabelOpen} />)}
        </div>
    );
}

export default NewsletterList;