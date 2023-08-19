import PropTypes from "prop-types";
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

NewsCard.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        newsHeader: PropTypes.string.isRequired,
        newsBody: PropTypes.string.isRequired,
        newsDate: PropTypes.string.isRequired,
    }),
    id: PropTypes.string
}

export default NewsCard