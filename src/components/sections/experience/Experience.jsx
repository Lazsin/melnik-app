
import xp_img from '../../../assets/img/experience.jpg'
// import './Experience.css'
// export default function Experience() {
//     return(
//         <section className='experience'>
//           <div className='experience-content'>
//             <div className='experience-text'>
//               <div class="name-line">
//                     <span class="line"></span>
//                     <span class="name">Про мене</span>
//                 </div>
//               <h1 className='experience-title'>Мій досвід</h1>
//               <ul className='experience-list'>
//                 <li> З 2007 року працюю в IT, також маю досвід управління проєктами та програмами.</li>
//                 <li>Засновниця продакшн-студії WEEM.PRO та освітнього консалтингового центру SkillsUp.ua.</li>
//                 <li>Співзасновниця ІТ-конференції run-it.com.ua — понад 450 учасників на рік.</li>
//                 <li>Експертка з бізнес-аналізу, а також управління процесами, якістю, постачанням, персоналом, ризиками, взаємовідносинами з клієнтами в ІТ-аутсорсингу.</li>
//                 <li>Керівниця навчальних центрів, освітніх програм та програм управління талантами.</li>
//                 <li>Agile-консультантка — координація проєктів Agile-трансформації на рівні команд та компаній у Швеції, Швейцарії, Польщі.</li>
//                 <li>Міжнародні сертифікати в галузі Agile, Scrum, Management.</li>
//                 <li>Спікерка міжнародних конференцій та авторка професійних статей.</li>
//                 <li>Увійшла в ТОП-20 підприємниць України в рамках програми SheExports у 2019 році.</li>
//               </ul>
//             </div>
//             <div className='experience-img'>
//               <img src={xp_img} alt='experience-img'></img>
//             </div>
//           </div>
//         </section>
//     )
// }


export default function Experience() {
  return (
    <section className=" bg-white flex justify-center">
      <div className="py-24 md:px-20 max-w-[1600px] text-gray-800">
<div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Текст */}
        <div className="md:w-1/2 space-y-6 p-1">
          {/* Заголовок с линией */}
          <div className="flex items-center gap-3">
            <span className="block w-10 h-0.5 bg-[#28a0b5]"></span>
            <span className="uppercase tracking-widest text-neutral-700 font-semibold">
              Про мене
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Мій досвід
          </h1>

          {/* Список */}
          <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              З 2007 року працюю в IT, також маю досвід управління проєктами та програмами.
            </li>
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              Засновниця продакшн-студії WEEM.PRO та освітнього консалтингового центру SkillsUp.ua.
            </li>
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              Співзасновниця ІТ-конференції run-it.com.ua — понад 450 учасників на рік.
            </li>
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              Експертка з бізнес-аналізу, управління процесами, якістю, постачанням, персоналом, ризиками, взаємовідносинами з клієнтами в ІТ-аутсорсингу.
            </li>
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              Керівниця навчальних центрів, освітніх програм та програм управління талантами.
            </li>
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              Agile-консультантка — координація проєктів Agile-трансформації на рівні команд та компаній у Швеції, Швейцарії, Польщі.
            </li>
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              Міжнародні сертифікати в галузі Agile, Scrum, Management.
            </li>
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              Спікерка міжнародних конференцій та авторка професійних статей.
            </li>
            <li className="flex items-start">
              <span className="text-neutral-700 mr-2 text-lg">⦿</span>
              Увійшла в ТОП-20 підприємниць України в рамках програми SheExports у 2019 році.
            </li>
          </ul>
        </div>

        {/* Изображение */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={xp_img}
            alt="experience"
            className="md:max-w-sm rounded-xl shadow-[10px_10px_40px_20px_rgba(39,160,181,0.3)]"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
