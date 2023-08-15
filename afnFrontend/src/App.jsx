import {useState, useEffect} from 'react'
import './styleSheet.css'
import NavBar from "./components/NavBar.jsx";
import NewsGrid from "./components/NewsGrid.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
    const [newsList, setNewsList] = useState([])

    const getNews = async () => {
        const response = await fetch("news/get-all")
        return response.json()
    }

    useEffect(() => {
        getNews().then((news) => {
            setNewsList(news)
        })
    }, [])

    return (
        <>
            <NavBar/>
            <WelcomeMessage/>
            <NewsGrid newsList={newsList}/>
        </>
    )
}

export default App
