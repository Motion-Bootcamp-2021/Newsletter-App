import ListItem from './ListItem';
import './VerticalList.scss';


function VerticalList({props}){
    const data = props.data;
    const setChosenArticle = props.setChosenArticle;
    const setArticleAsRead = props.setArticleAsRead;

    return (
        <ul className="vertical-menu">
            {
                data ? data.map((article, i) => 
                <ListItem article={article} key={i} setChosenArticle={setChosenArticle} setArticleAsRead={setArticleAsRead}/>) 
                : null
            }
        </ul>
    )
}

export default VerticalList;