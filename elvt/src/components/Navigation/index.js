import './index.scss';
import logo from '../../assets/media/split-logo.svg'
const Navigation = () => {
    return(
        <div className='nav'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='links'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Our Work</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation