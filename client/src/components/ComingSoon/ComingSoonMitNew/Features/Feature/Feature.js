import './Feature.scss';

const Feature = ( {icon, title, content} ) => {
    return (
        <article className="feature-article">
            <div className="feature-article-icon">{icon}</div>
            <h3 className="feature-article-title">{title}</h3>
            <p className="feature-article-content">{content}</p>
        </article>
    )
}

export default Feature;