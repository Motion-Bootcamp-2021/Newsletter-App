import './MagazineView.scss';
import MagazineViewList from './MagazineViewList';

const MagazineView = ({ news, labels, setLabels }) => {
    return (
        <div className="magazine-view-container">
            {
                news && [...news.keys()].map(key => <MagazineViewList
                    key={key}
                    binder={key}
                    news={news.get(key)} 
                    labels={labels}
                    setLabels={setLabels}/>)
            }
        </div>
    );
}

export default MagazineView;