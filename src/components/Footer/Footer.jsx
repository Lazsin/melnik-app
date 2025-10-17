import './Footer.css'
import logo from '../../assets/img/logo_white.png'
export default function Footer(){
    return(
        <footer >
          <img className='logo' src={logo} alt='logo-footer'></img>
          <p className='text-footer'>© 2025 Maryna Melnyk, All Rights Reserved</p>
        </footer>
    )
}