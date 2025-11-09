
import icon1 from "../../../assets/img/icon1.png";
import icon2 from "../../../assets/img/icon2.png";
import Button from '../../Button/Button'
import { useEffect, useRef, useState } from "react";


// export default function Cooperate() {
//   const items = [
//     {
//       icon: icon1,
//       title: "Консультації з розвитку бізнесу",
//       text: "Аудит бізнес-процесів | Допомога у трансформації | Корпоративне навчання | Центри оцінювання | Розроблення матриці/таксономії навичок для співробітників компанії",
//     },
//     {
//       icon: icon2,
//       title: "Кар’єрна терапія",
//       text: "Розбір особистого запиту | Постановка чітких цілей | Створення індивідуального плану розвитку | Сприяння процесу вдосконалення",
//     },
//   ];

//   return (
//     <section className="bg-[#28a0b5] flex justify-center">
//      <div className="flex flex-col-reverse  max-w-[1600px] md:flex-row justify-center items-start px-1 md:px-4  py-24 ">
//        {/* Левая колонка — карточки */}
//       <div className="flex flex-col items-center lg:items-start w-full lg:w-fit space-y-10 mb-16 lg:mb-0">
//         {items.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white self-center md:self-end rounded-2xl flex items-start p-6 shadow-md min-w-[280px] max-w-md transition-transform hover:scale-[1.02]"
//           >
//             <div className="flex max-w-[60px] ">
//               <img src={item.icon} alt={item.title} className="w-full " />
//             </div>
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold mb-2 text-gray-800">
//                 {item.title}
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-sm md:text-base">
//                 {item.text}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Правая колонка — текст и кнопка */}
//       <div className="text-white w-full p-10 lg:w-[45%]">
//         <h1 className="text-3xl md:text-4xl font-bold mb-6">
//           Давайте співпрацювати
//         </h1>
//         <p className="text-lg md:text-xl leading-relaxed mb-8">
//           В роботі я застосовую проєктний підхід. Там, де є чітке бачення
//           фінального результату, ми можемо визначити кінцевий термін, обсяг і
//           ресурси, необхідні для досягнення будь-якої, навіть найамбітнішої
//           мети.
//         </p>
//         <Button
//           className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"
//           text="Напишіть мені"
//         />
//       </div>
//      </div>
//     </section>
//   );
// }





export default function Cooperate() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const items = [
    {
      icon: icon1,
      title: "Консультації з розвитку бізнесу",
      text: "Аудит бізнес-процесів | Допомога у трансформації | Корпоративне навчання | Центри оцінювання | Розроблення матриці/таксономії навичок для співробітників компанії",
    },
    {
      icon: icon2,
      title: "Кар’єрна терапія",
      text: "Розбір особистого запиту | Постановка чітких цілей | Створення індивідуального плану розвитку | Сприяння процесу вдосконалення",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
       ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target) // ← 💡 Снимаем наблюдение после первого появления
      }
    },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#28a0b5] flex justify-center overflow-hidden"
    >
      <div className="flex flex-col-reverse max-w-[1600px] md:flex-row justify-center items-start px-4 py-24 gap-8">
        {/* Левая колонка — карточки */}
        <div
          className={`flex flex-col items-center lg:items-start w-full lg:w-fit space-y-10 mb-16 lg:mb-0 transition-all duration-700 ease-out transform ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white self-center md:self-end rounded-2xl flex items-start p-6 shadow-md min-w-[280px] max-w-md transition-transform hover:scale-[1.02]"
            >
              <div className="flex max-w-[60px]">
                <img src={item.icon} alt={item.title} className="w-full" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Правая колонка — текст и кнопка */}
        <div
          className={`text-white w-full p-10 lg:w-[45%] transition-all duration-700 ease-out transform delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Давайте співпрацювати
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            В роботі я застосовую проєктний підхід. Там, де є чітке бачення
            фінального результату, ми можемо визначити кінцевий термін, обсяг і
            ресурси, необхідні для досягнення будь-якої, навіть найамбітнішої
            мети.
          </p>
          <Button
            className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"
            text="Напишіть мені"
          />
        </div>
      </div>
    </section>
  );
}

