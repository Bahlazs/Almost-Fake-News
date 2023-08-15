const NewsCard = (article) => {
    return (
        <div className="news-card">
            <p className="news-title">{article.title}</p>
            <p className="news-head">{article.head}</p>
        </div>
    )
}
export default NewsCard