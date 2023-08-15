
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
                <Link to="message" ><h2 className="page-title" >Almost Fake News</h2></Link>
                <div className='hamburger-icon' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                    <li className="navbar-item">
                        <Link to="message" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="news-grid" onClick={closeMenu}>News</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="contacts" onClick={closeMenu}>Contacts</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
export default NavBar