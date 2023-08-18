import './stylesheets/NewsCard.css'

const NewsCard = ({article, id}) => {
    return (
        <div className={"news-card" + id}>
            <div className={"nt-container"}>
                <h3 className="news-title">{article.title}</h3>
            </div>
            <div className="article-line"></div>
            <h4 className="news-head">{article.newsHeader}</h4>
            <p className="news-date">{article.newsDate}</p>
            <div className="article-line"></div>
        </div>
    )
}
export default NewsCard