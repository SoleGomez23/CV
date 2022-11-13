import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/sole.jpeg';
import './index.scss';

const Home=() =>{

    return(
        <div className= 'container home-page'>
            <div className='text-zone'>
                <h1> Hi, <br/> I'am
                <img src={LogoTitle} alt='developer'/>
                <br/>
                web developer
                </h1>
                <h2>Frontend Developer</h2>
                <Link to='/contact' className='flat-button'>Contacto</Link>
            </div>
        </div>
    );
}

export default Home
