
import {Link} from "react-scroll"
import {FaBars, FaTimes} from "react-icons/fa"
import {useState} from "react";
import './stylesheets/NavBar.css'


const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <Link  to="message" spy={true} smooth={true} duration={500}><h2 className="page-title" >Almost Fake News</h2></Link>
                <div className='hamburger-icon' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                    <li className="navbar-item">
                        <Link to="message" onClick={closeMenu} spy={true} smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="news-grid" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500}>News</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="contacts" onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500}>Contacts</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
export default NavBar