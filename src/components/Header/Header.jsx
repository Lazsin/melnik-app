import Button from "../Button/Button"
import './Header.css'
import logo from '../../assets/img/logo_blue.png'


export default function Header(){
    return(
        <header>
          <div className='header-img'>
            <img className="logo" src={logo} alt="header-logo"></img>
          </div>
          <div className='header-navbar'>
              <p>Статті</p>
              <p>Мої проекти</p>
              <p>Послуги</p>
              <p>Українська</p>
          </div>
          <div>
            <Button className='standart-bold' text='Contact'></Button>
          </div>
        </header>
    )
}