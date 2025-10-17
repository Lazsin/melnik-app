import './Consultations.css'
import Button from '../../Button/Button'

export default function Consultations(){
    return(
        <section className='consultations'>
            <h1 className='consultations-title'>Консультації з розвитку бізнесу</h1>
            <div className='consultations-block'>
                <div className='consultation-content-card'>
                <h1>Аудит бізнес-процесів</h1>
                <p>Аудит допоможе вам визначити початковий запит, зрозуміти основну проблему бізнес-процесів та отримати систематизований підхід до вашого запиту.</p>
                <Button text='Дивитись більше'/>
                </div>
                <div className='consultation-content-card'>
                <h1>Центр оцінювання персоналу</h1>
                <p>Після одноденного заходу, під час якого співробітники виконують різні вправи в групах та індивідуально, кожен отримує деталізований особистий звіт про свої сильні сторони та зони розвитку.</p>
                <Button text='Дивитись більше'/>
                </div>
                <div className='consultation-content-card'>
                <h1>Матриця навичок в компанії</h1>
                <p>Розроблення матриці компетенцій — це повне наскрізне делегування підходів персоналу для його росту та розвитку.</p>
                <Button text='Дивитись більше'/>
                </div>
            </div>
            <h1 className='consultations-title'>Консультації з кар’єрних питань</h1>
            <div className='consultations-block'>
                <div className='consultation-content-card'>
                <h1>Кар'ерна терапія</h1>
                <p>Визначимо сфери діяльності, де ви могли б найкраще реалізувати свій потенціал, а також використати знання й навички, отримані в університеті.</p>
                <Button text='Дивитись більше'/>
                </div>
                <div className='consultation-content-card'>
                <h1>Підготовка до співбесіди</h1>
                <p>Після годинного відеодзвінка ви будете впевнені, що успішно пройдете співбесіду з HR або керівником компанії.</p>
                <Button text='Дивитись більше'/>
                </div>
                <div className='consultation-content-card'>
                <h1>Створення резюме</h1>
                <p>Допоможу скласти резюме, навіть якщо вам майже нічого вказати в графі «Досвід роботи».</p>
                <Button text='Дивитись більше'/>
                </div>
          </div>
        </section>
    )
}