import './FavoriteArticle.scss';

function FavoriteArticle({article}) {
    return (
        <div className="favorite-article">
            <article className="article">
                <p>{article.title}</p>
                <p className="date">{article.date}</p>
                <div className="circle"></div>
            </article>
        </div>
    )
}

export default FavoriteArticle;
