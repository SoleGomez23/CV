import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/sole.jpeg';
import AnimatedLetters from '../AnimatedLetters';
import Fondo from './Fondo';
import './index.scss';

const Home=() =>{

    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray =['s','o', 'l', 'e', 'd', 'a', 'd']
    const jobArray = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'] 
    
    useEffect(()=> {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')

        },4000)
    }, [])
    return(
        <div className= 'container home-page'>
            <div className='text-zone'>
                <img src={LogoTitle} alt='developer'/>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>a,</span>
                    <br/>
                    <span className={letterClass}>m</span>
                    <span className={letterClass}>i </span>
                    <span className={letterClass}>  </span>
                    <span className={letterClass}>n</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>m</span>
                    <span className={letterClass}>b</span>
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>e </span>
                    <span className={letterClass}>  </span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>s </span>
                    <span className={letterClass}>  </span>
                    <span className={letterClass}>S</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>d</span>
                    <span className={letterClass}>a</span>
                    <span className={letterClass}>d</span>

                </h1>
              
                <h2>Frontend Developer</h2>
                <Link to='/contact' className='flat-button'>Contacto</Link>
            </div>
            <Fondo/>
        </div>
    );
}

export default Home
