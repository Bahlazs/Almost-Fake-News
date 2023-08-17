import './stylesheets/Home.css'

const Home = () => {
    return (
        <div className={"home"}>
            <div id="message" className="message">
                <h1 className="greetings">Hello Visitor!</h1>
                <p className="welcome">Welcome on Almost Fake News, enjoy your stay!</p>
                <p>For all the fake news:</p>
                <a href="/" className="sub-button">SUBSCRIBE</a>

            </div>
        </div>
    )
}

export default Home