import { ReactComponent as Bookmark } from '../assets/bookmark.svg';
import { ReactComponent as Hide } from '../assets/hide.svg';
import { ReactComponent as Openbook } from '../assets/openbook.svg';
import { ReactComponent as Star } from '../assets/star-dark.svg';
import { ReactComponent as CheckboxUnchecked } from '../assets/checkbox-unchecked-dark.svg';
import { ReactComponent as CheckboxChecked } from '../assets/checkbox-checked.svg';
import { markNewsReadLater } from '../../../../services/userService';
import { AuthContext } from '../../../../contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';

const OptionsSection = ({ selectedNews, setSelectedNews, news }) => {
    const user = useContext(AuthContext);
    const [marked, setMarked] = useState(false);

    useEffect(() => {
        if (selectedNews.length === news.length) {
            setMarked(true);
            return;
        }
        setMarked(false);
    }, [selectedNews, news]);

    const markAll = () => {
        if (selectedNews.length === news.length) {
            setSelectedNews([]);
            return;
        }
        setSelectedNews(news.map(x => x._id));
        setMarked(true);
    }

    const onMarkNewsReadLater = () => {
        if (user) {
            user.getIdToken()
                .then(async idToken => {
                    await markNewsReadLater(selectedNews, idToken);
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <>
            <article className='news-option mark-read-later-option'>
                <Bookmark className='news-option-icon' /> <p>Read Later</p>
            </article>
            <article className='news-option'>
                <Hide className='news-option-icon' /> <p>Hide</p>
            </article>
            <article className='news-option' onClick={onMarkNewsReadLater}>
                <Openbook className='news-option-icon' /> <p>Mark as read</p>
            </article>
            <article className='news-option'>
                <Star className='news-option-icon' /> <p>Add label</p>
            </article>
            <article className='news-option' onClick={markAll}>
                {
                    marked ? <CheckboxChecked className='news-option-icon' />
                        : <CheckboxUnchecked className='news-option-icon' />
                } <p>Mark All</p>
            </article>
        </>
    )
}

export default OptionsSection;