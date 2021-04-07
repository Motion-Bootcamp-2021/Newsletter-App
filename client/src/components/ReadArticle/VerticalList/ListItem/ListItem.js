import switchArticle from '../switchArticles';
import './ListItem.scss';


function ListItem({article, setChosenArticle, setArticleAsRead}){
  
    return(
        <div className="params">
            <p className="headerText" onClick={function(event) { setChosenArticle(article); setArticleAsRead(article); switchArticle(event);}}>{article.title}</p>
            <b className="dateText">{article.date}</b>
            { !article.read ? <div className="circle"></div> : null }
        </div>
    )
}

export default ListItem;