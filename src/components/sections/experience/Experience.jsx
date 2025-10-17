import './Experience.css'
import xp_img from '../../../assets/img/experience.jpg'

export default function Experience() {
    return(
        <section className='experience'>
          <div className='experience-content'>
            <div className='experience-text'>
              <div class="name-line">
                    <span class="line"></span>
                    <span class="name">Про мене</span>
                </div>
              <h1 className='experience-title'>Мій досвід</h1>
              <ul className='experience-list'>
                <li> З 2007 року працюю в IT, також маю досвід управління проєктами та програмами.</li>
                <li>Засновниця продакшн-студії WEEM.PRO та освітнього консалтингового центру SkillsUp.ua.</li>
                <li>Співзасновниця ІТ-конференції run-it.com.ua — понад 450 учасників на рік.</li>
                <li>Експертка з бізнес-аналізу, а також управління процесами, якістю, постачанням, персоналом, ризиками, взаємовідносинами з клієнтами в ІТ-аутсорсингу.</li>
                <li>Керівниця навчальних центрів, освітніх програм та програм управління талантами.</li>
                <li>Agile-консультантка — координація проєктів Agile-трансформації на рівні команд та компаній у Швеції, Швейцарії, Польщі.</li>
                <li>Міжнародні сертифікати в галузі Agile, Scrum, Management.</li>
                <li>Спікерка міжнародних конференцій та авторка професійних статей.</li>
                <li>Увійшла в ТОП-20 підприємниць України в рамках програми SheExports у 2019 році.</li>
              </ul>
            </div>
            <div className='experience-img'>
              <img src={xp_img} alt='experience-img'></img>
            </div>
          </div>
        </section>
    )
}