import './stylesheets/NewsCard.css'

const NewsCard = ({article}) => {
    return (
        <div className="news-card">
            <div></div><h3 className="news-title">{article.title}</h3>
            <h4 className="news-head">{article.newsHeader}</h4>
            <p className="news-date">{article.newsDate}</p>
        </div>
    )
}
export default NewsCard