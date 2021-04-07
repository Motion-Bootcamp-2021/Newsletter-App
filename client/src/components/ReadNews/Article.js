import DOMPurify from 'dompurify';

const Article = ({ news }) => {
    
    const sanitizedContent = DOMPurify.sanitize(news.contentHtml);

    return (
        <div>
            <div className='article-date-time'>
                <div className='article-date'>{new Date(news.date).toDateString().substring(4)}</div>
                <div className='article-read-time'>{news.readTime} min to read</div>
            </div>
            <div className='article-title'>{news.title}</div>
            <div className='article-content' dangerouslySetInnerHTML={{__html:sanitizedContent}}></div>
        </div>
    )
}

export default Article;