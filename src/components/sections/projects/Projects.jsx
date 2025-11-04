
import skillsup from '../../../assets/img/SkillsUp.png'
import weem from '../../../assets/img/WeEm.png'
import charinity from '../../../assets/img/Charinity.png'

// import './Projects.css'
// export default function Projects(){
//     return(
//             <section className='projects'>
//                 <h1 className='projects-title'>Мої проєкти</h1>
//                 <div className='projects-img'>
//                     <div className='item-img'>
//                         <img src={skillsup} alt='skills-up'></img>
//                     </div>
//                     <div className='item-img'>
//                         <img src={weem} alt='we-em'></img>
//                     </div>
//                     <div className='item-img'>
//                         <img src={charinity} alt='charinity'></img>
//                     </div>
//                 </div>
//             </section>

//     )
// }



export default function Projects() {
  return (
    <section className="flex justify-center">
      <div className='text-center max-w-[1600px] py-12 px-1'>
        <h1 className="text-[#25a0b5] text-3xl font-semibold mb-10">Мої проєкти</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 mx-5" >
        <div className="item-img ">
          <img
            src={skillsup}
            alt="skills-up"
            className="max-w-[300px] w-full rounded-xl hover:scale-105 transition-transform duration-300 md:m-5"
          />
        </div>
        <div className="item-img">
          <img
            src={weem}
            alt="we-em"
            className="max-w-[300px] w-full rounded-xl hover:scale-105 transition-transform duration-300 md:m-5"
          />
        </div>
        <div className="item-img">
          <img
            src={charinity}
            alt="charinity"
            className="max-w-[300px] w-full rounded-xl  hover:scale-105 transition-transform duration-300 md:m-5"
          />
        </div>
      </div>
      </div>
    </section>
  )
}
