const Article = ({ news }) => {
    return (
        <div>
            <div className='article-date-time'>
                <div className='article-date'>{new Date(news.date).toDateString().substring(4)}</div>
                <div className='article-read-time'>{news.readTime} min to read</div>
            </div>
            <div className='article-title'>{news.title}</div>
            <img src={news.image} className='article-img'/>
            <div className='article-content'>{news.content}</div>
        </div>
    )
}

export default Article;