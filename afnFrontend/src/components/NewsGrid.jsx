import NewsCard from "./NewsCard.jsx";
import './stylesheets/NewsGrid.css'


const NewsGrid = ({newsList}) => {

    if (newsList.length === 0) {
        return (
            <div className="loading">LOADING.....</div>
        )

    }

    return(
        <div id="news-grid" className="news-grid">
            {newsList.map((news, i) => {
                <NewsCard key={i} article={news}/>
            })}
        </div>
    )
}

export default NewsGrid