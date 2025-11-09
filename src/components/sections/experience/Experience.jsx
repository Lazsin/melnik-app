
import xp_img from '../../../assets/img/experience.jpg'


// export default function Experience() {
//   return (
//     <section className="bg-white flex justify-center mx-auto">
//       <div className="py-24 md:px-5 max-w-[1600px] flex mx-auto text-gray-800">
//         <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-12">
//         {/* Текст */}
//         <div className="md:w-1/2 space-y-6 p-1">
//           {/* Заголовок с линией */}
//           <div className="flex items-center gap-3">
//             <span className="block w-10 h-0.5 bg-[#28a0b5]"></span>
//             <span className="uppercase tracking-widest text-neutral-700 font-semibold">
//               Про мене
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Мій досвід
//           </h1>

//           {/* Список */}
//           <ul className="list-none space-y-4 text-gray-700 leading-relaxed">
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               З 2007 року працюю в IT, також маю досвід управління проєктами та програмами.
//             </li>
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               Засновниця продакшн-студії WEEM.PRO та освітнього консалтингового центру SkillsUp.ua.
//             </li>
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               Співзасновниця ІТ-конференції run-it.com.ua — понад 450 учасників на рік.
//             </li>
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               Експертка з бізнес-аналізу, управління процесами, якістю, постачанням, персоналом, ризиками, взаємовідносинами з клієнтами в ІТ-аутсорсингу.
//             </li>
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               Керівниця навчальних центрів, освітніх програм та програм управління талантами.
//             </li>
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               Agile-консультантка — координація проєктів Agile-трансформації на рівні команд та компаній у Швеції, Швейцарії, Польщі.
//             </li>
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               Міжнародні сертифікати в галузі Agile, Scrum, Management.
//             </li>
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               Спікерка міжнародних конференцій та авторка професійних статей.
//             </li>
//             <li className="flex items-start">
//               <span className="text-neutral-700 mr-2 text-lg">⦿</span>
//               Увійшла в ТОП-20 підприємниць України в рамках програми SheExports у 2019 році.
//             </li>
//           </ul>
//         </div>

//         {/* Изображение */}
//         <div className="md:w-fit flex justify-center">
//           <img
//             src={xp_img}
//             alt="experience"
//             className="md:max-w-sm rounded-xl shadow-[10px_10px_40px_20px_rgba(39,160,181,0.3)]"
//           />
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // ✅ анимация только один раз
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white flex justify-center mx-auto overflow-hidden">
      <div className="py-24 md:px-5 max-w-[1600px] flex mx-auto text-gray-800">
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-12">
          {/* Текст */}
          <div
            className={`md:w-1/2 space-y-6 p-1 transform transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="block w-10 h-0.5 bg-[#28a0b5]"></span>
              <span className="uppercase tracking-widest text-neutral-700 font-semibold">
                Про мене
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Мій досвід
            </h1>

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
          <div
            className={`md:w-fit flex justify-center transform transition-all duration-700 ease-out delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
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

