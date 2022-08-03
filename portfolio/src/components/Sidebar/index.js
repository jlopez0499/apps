import {Link, NavLink} from 'react-router-dom'
import '/root/apps/portfolio/src/App.scss'
import './index.scss'
import LogoJ from '/root/apps/portfolio/src/assets/images/3DJ.svg'
import LogoSubtitle from '/root/apps/portfolio/src/assets/images/name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faBriefcase, faListSquares} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoJ} alt="logo" />
            <img src={LogoSubtitle} alt="subtitle" className="sub-logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#686868" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#686868" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="work" to="/work">
            <FontAwesomeIcon icon={faListSquares} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="archive" to="/projects">
            <FontAwesomeIcon icon={faBriefcase} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#686868" to="/contact"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/justin-lopez-020a38201/" >
                    <FontAwesomeIcon icon={faLinkedin} color="#686868" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/justinloppez/" >
                    <FontAwesomeIcon icon={faInstagram} color="#686868" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.github.com/jlopez0499" >
                    <FontAwesomeIcon icon={faGithub} color="#686868" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar