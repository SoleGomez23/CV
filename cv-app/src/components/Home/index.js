import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/sole.jpeg';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home=() =>{

    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray =['s','o', 'l', 'e', 'd', 'a', 'd']
    const jobArray = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'] 
    
    return(
        <div className= 'container home-page'>
            <div className='text-zone'>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <h1> Hola, <br/>mi nombre es Soledad</h1>
                <h2>Frontend Developer</h2>
                <Link to='/contact' className='flat-button'>Contacto</Link>
            </div>
        </div>
    );
}

export default Home
