import './Cooperate.css'
import Button from '../../Button/Button'


export default function Cooperate(){
    return(
        <section className='cooperate'>
          <div className='blocks-cooperate'>
            <div className='content-block-cooperate'>
              <div className='img-cooperate'>
                <img alt='icon-cooperate'/>
              </div>
              <div className='text-block-cooperate'>
                <h2>Консультації з розвитку бізнесу</h2>
                <p>Аудит бізнес-процесів | Допомога у трансформації | Корпоративне навчання | Центри оцінювання | Розроблення матриці/таксономії навичок для співробітників компанії</p>
              </div>
            </div>
            <div className='content-block-cooperate'>
              <div className='img-cooperate'>
                <img alt='icon-cooperate'/>
              </div>
              <div className='text-block-cooperate'>
                <h2>Кар’єрна терапія</h2>
                <p>Розбір особистого запиту | Постановка чітких цілей | Створення індивідуального плану розвитку | Сприяння процесу вдосконалення</p>
              </div>
            </div>
          </div>
          <div className='text-cooperate'>
            <h1>Давайте співпрацювати</h1>
            <p>В роботі я застосовую проєктний підхід. Там, де є чітке бачення фінального результату, ми можемо визначити кінцевий термін, обсяг і ресурси, необхідні для досягнення будь-якої, навіть найамбітнішої мети.</p>
            <Button className='standart' text='Напишіть мені' />
          </div>
        </section>
    )
}