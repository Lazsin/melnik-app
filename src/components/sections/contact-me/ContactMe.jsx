import './ContactMe.css'
import telegram from '../../../assets/img/telegram-svgrepo-com.svg'
import email from '../../../assets/img/email-1-svgrepo-com.svg'
import lin from '../../../assets/img/linked-in-logo-of-two-letters-svgrepo-com.svg'
import fb from '../../../assets/img/facebook-176-svgrepo-com.svg'
import insgrm from '../../../assets/img/instagram-svgrepo-com.svg'

export default function ContactMe(){
    return(
                <section className='contact-me'>
          <div className='contact-block'>
            <img src={telegram} alt='icon'></img>
            <h1>Telegram me</h1>
            <p>@marmeliko</p>
          </div>
          <div className='contact-block'>
            <img  src={email}alt='icon'></img>
            <h1>Email me</h1>
            <p>marmeliko@gmail.com</p>
          </div>
          <div className='contact-block'>
            <img src={lin} alt='icon'></img>
            <h1>Connect me</h1>
            <p>linkedin.com/in/marmeliko</p>
          </div>
          <div className='contact-block'>
            <img src={fb} alt='icon'></img>
            <h1>Friend me</h1>
            <p>facebook.com/marmeliko</p>
          </div>
          <div className='contact-block'>
            <img src={insgrm} alt='icon'></img>
            <h1>Follow me</h1>
            <p>instagram.com/marmeliko</p>
          </div>
        </section>
    )
}