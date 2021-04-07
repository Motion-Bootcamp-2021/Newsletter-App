import { ReactComponent as ArrowIcon } from'./assets/arrow-icon.svg';
import New from './New';
import './Label.scss';

const Label = ({ labelTitle, newsCounter, newsletters, handleLabelHeaderClick, handleNewClick }) => {
    return (
        <div className="label-wrapper">
                <div className="label-header" onClick={handleLabelHeaderClick}>
                    <span className="label-title">{labelTitle}</span>
                    
                    <div className="header-additions">
                        <span className="label-news-counter">{newsCounter}</span>
                        <span className="label-arrow">
                            <ArrowIcon />
                        </span>
                    </div>
                </div>

                <div className="label-news">
                    {
                    newsletters
                        .map((singleNew, index) => 
                                (
                                    <New
                                        key={index}
                                        newTitle={singleNew.newTitle}
                                        newCounter={singleNew.newCounter}
                                        newAvatar={singleNew.newAvatar}
                                        newUrl={singleNew.newUrl}
                                        handleNewClick={handleNewClick}/>
                                )
                            )
                    }
                </div>
            </div>
    );
}

export default Label;