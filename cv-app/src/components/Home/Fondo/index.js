import './index.scss';
import LogoFondo from '../../../assets/images/fondo.png';

const Logo = ()=> {
    return(
        <div className='logo-container'>
            <img className='solid-logo' src={LogoFondo} alt=''/>
            <svg 
            width='559pt'
            height='897pt'
            version='1.0'
            viewBox='0 0 550 897'
            xmlns='http://www.w3.org/2000/svg'>
                <g
                transform='traslate(0 457) scale(.1 -.1)'
                fill='none'
                ></g>
            </svg>
        </div>
    )
}

export default Logo 