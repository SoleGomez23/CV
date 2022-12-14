import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/sole.jpeg';
import LogoSubtitle from '../../assets/images/logonombre.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBeer, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='soledad'/>
        </Link>
        
        <nav>
            <NavLink exact='True'activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='4d4d4e'/>
            </NavLink>

            <NavLink exact='True'activeclassname='active' classname='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='4d4d4e'/>
            </NavLink>

            <NavLink exact='True'activeclassname='active' classname='contact-name' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='4d4d4e'/>
            </NavLink>
            
        </nav>

        <ul>
            <li>
                <a 
                target='_blank'
                rel='norerrer'
                href='https://www.linkedin.com/in/sole-gomez23/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a 
                target='_blank'
                rel='norerrer'
                href='https://github.com/SoleGomez23'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>


    </div>

    )

export default Sidebar