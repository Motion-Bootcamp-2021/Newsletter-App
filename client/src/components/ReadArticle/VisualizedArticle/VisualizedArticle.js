import './VisualizedArticle.scss';


function VisualizeArticle({chosenArticle}){

    return (
        <div className="article">
            <h3 id="articleTitle" className="header">{chosenArticle.title}</h3>
            <p className="text">{chosenArticle.content}</p>
        </div>
    );
}

export default VisualizeArticle;