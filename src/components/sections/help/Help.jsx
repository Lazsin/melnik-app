import Button from '../../Button/Button'
import './Help.css'

export default function Help(){
    return(
        <section className='help'>
          <div className='help-text'>
            <h1 className='help-title'>Давайте обговоримо, чим я можу вам допомогти?</h1>
            <p>Запишіться на безоплатну 30-хвилинну онлайн-консультацію, і я зв’яжуся з вами, щоб узгодити час</p>
          </div>
          <form className='help-form'>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Write your message here"></textarea>
            <Button text='Send Massage'/>
          </form>
        </section>
    )
}