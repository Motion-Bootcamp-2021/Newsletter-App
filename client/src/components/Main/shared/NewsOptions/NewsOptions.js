import OptionsSection from './OptionsSection';
import './NewsOptions.scss';

const NewsOptions = ({ selectedNews, setSelectedNews, news, confirmDialogueIsOpen, setConfirmDialogueIsOpen }) => {

    return (
        <section className='news-options' >
            <OptionsSection
                selectedNews={selectedNews}
                setSelectedNews={setSelectedNews}
                news={news}
                confirmDialogueIsOpen={confirmDialogueIsOpen}
                setConfirmDialogueIsOpen={setConfirmDialogueIsOpen}/>
        </section>
    )
}

export default NewsOptions;