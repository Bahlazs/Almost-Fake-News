import NewsCard from "./NewsCard.jsx";
import PropTypes from "prop-types";
import './stylesheets/NewsGrid.css'



const NewsGrid = ({newsList}) => {
    let mainNews
    let restOfTheNews


    if (newsList.length === 0) {
        return (
            <div id="news-grid" className="news-grid">
                <div className="loading">LOADING.....</div>
            </div>
        )

    } else {
        mainNews = newsList[0]
        restOfTheNews = newsList.slice(1, 8)

        console.log(mainNews)
        return (
            <div id="news-grid" className="news-grid">
                <div className="main-article">
                    <div className="img-container"></div>
                    <h2 className="main-article-title">{mainNews.title}</h2>
                    <div className="article-line"></div>
                    <h3 className="main-article-header">{mainNews.newsHeader}</h3>
                    <p className="main-article-body">{mainNews.newsBody}</p>
                    <p className="main-article-date">{mainNews.newsDate}</p>
                    <div className="article-line"></div>
                </div>
                {restOfTheNews.map((news, i) => (
                    <NewsCard article={news} id={" _"+(i+1)} key={i}/>
                ))}
            </div>
        )
    }


}

NewsGrid.propTypes = {
    newsList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            newsHeader: PropTypes.string.isRequired,
            newsBody: PropTypes.string.isRequired,
            newsDate: PropTypes.string.isRequired,
        })
    ).isRequired,

}

export default NewsGrid