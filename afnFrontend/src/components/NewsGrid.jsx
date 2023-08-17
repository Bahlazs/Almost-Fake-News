import NewsCard from "./NewsCard.jsx";
import './stylesheets/NewsGrid.css'



const NewsGrid = ({newsList}) => {
    let mainNews


    if (newsList.length === 0) {
        return (
            <div id="news-grid" className="news-grid">
                <div className="loading">LOADING.....</div>
            </div>
        )

    } else {
        mainNews = newsList.splice(0, 1)[0]
        console.log(mainNews)
        return (
            <div id="news-grid" className="news-grid">
                <div className="main-article">
                    <div className="mat-container">
                        <h2 className="main-article-title">{mainNews.title}</h2>
                    </div>
                    <h3 className="main-article-header">{mainNews.newsHeader}</h3>
                    <p className="main-article-body">{mainNews.newsBody}</p>
                    <p className="main-article-date">{mainNews.newsDate}</p>
                </div>
                {newsList.map((news) => (
                    <NewsCard article={news}/>
                ))}
            </div>
        )
    }


}

export default NewsGrid