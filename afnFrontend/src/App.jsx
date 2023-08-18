import {useState, useEffect} from 'react'
import NavBar from "./components/NavBar.jsx";
import NewsGrid from "./components/NewsGrid.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [newsList, setNewsList] = useState([])

    const getNews = async () => {
        const response = await fetch("news/get-all")
        return response.json()
    }

    useEffect(() => {
        getNews().then((news) => {
            setNewsList(news)
            console.log(newsList)
        })
    }, [])

    return (
        <>
            <NavBar/>
            <Home/>
            <NewsGrid newsList={newsList}/>
            <Footer/>
        </>
    )
}

export default App
