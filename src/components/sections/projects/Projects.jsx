import './Projects.css'
import skillsup from '../../../assets/img/SkillsUp.png'
import weem from '../../../assets/img/WeEm.png'
import charinity from '../../../assets/img/Charinity.png'


export default function Projects(){
    return(
            <section className='projects'>
                <h1 className='projects-title'>Мої проєкти</h1>
                <div className='projects-img'>
                    <div className='item-img'>
                        <img src={skillsup} alt='skills-up'></img>
                    </div>
                    <div className='item-img'>
                        <img src={weem} alt='we-em'></img>
                    </div>
                    <div className='item-img'>
                        <img src={charinity} alt='charinity'></img>
                    </div>
                </div>
            </section>

    )
}