import Button from "../../Button/Button"
import './BusinessCard.css'
import business_card_img from '../../../assets/img/BusinessCard.bmp'

export default function BusinessCard(){
    return(
        <section className='business-card'>
          <div className='content-business-card'>
            <div className='text-business-card'>
                <h1 className='title-business-card'>Консультант із розвитку бізнесу та особистості</h1>
                <div class="name-line">
                    <span class="line"></span>
                    <span class="name">Марина Мельник</span>
                </div>
                <Button className='standart' text='Дізнатись більше'/>

            </div>
          </div>
          <img src={business_card_img} alt="business-card-img"></img>
        </section>
    )
}