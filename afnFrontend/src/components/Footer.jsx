import "./stylesheets/Footer.css"
import {AiFillLinkedin, AiOutlineMail} from "react-icons/ai"
import {BsTelephone} from "react-icons/bs"

const Footer = () => {
    
    return(
      <div className="footer" id="contacts">
          <div className="email"><AiOutlineMail className={"icon"}/><p className={"footer-item"} >nick.balazs18@gmail.com</p></div>
          <div className="linkedin"><AiFillLinkedin className={"icon"}/><a  className={"footer-item"} href="https://www.linkedin.com/in/balazs-nick">Nick Balázs</a></div>
          <div className="tel"><BsTelephone className={"icon"}/><p className={"footer-item"} >+36 30 530 1304</p></div>
      </div>  
    )    
}

export default Footer