import './index.scss';
import logo from '../../assets/media/split-logo.svg';
import instagram from '../../assets/media/Instagram.svg';
import LinkedIn from '../../assets/media/LinkedIn.svg';

const Footer = () =>{
    return(
        <div className='footer'>
            <img src={logo} alt='logo'/>
            <ul>
                <li><a href='/'>Our Work</a></li>
                <li><a href='/'>Services</a></li>
                <li><a href='/'>Blog</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            <ul className='socials'>
                <li><a href="https://www.instagram.com/elvtstudios/"><img src={instagram} alt='instagram logo'/></a></li>
                <li><a href='https://www.linkedin.com/in/justin-lopez-020a38201/'><img src={LinkedIn} alt='LinkedIn logo'/></a></li>
            </ul>
            <ul>
                <li><a href='/'>2022 ELVT Studios™ | All Rights Reserved</a></li>
                <li><a href='/'>Terms & Conditions</a></li>
            </ul>
        </div>
    )
}

export default Footer;