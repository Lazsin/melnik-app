
import icon1 from "../../../assets/img/icon1.png";
import icon2 from "../../../assets/img/icon2.png";


import Button from '../../Button/Button'
// import './Cooperate.css'

// export default function Cooperate(){
//     return(
//         <section className='cooperate'>
//           <div className='blocks-cooperate'>
//             <div className='content-block-cooperate'>
//               <div className='img-cooperate'>
//                 <img alt='icon-cooperate'/>
//               </div>
//               <div className='text-block-cooperate'>
//                 <h2>Консультації з розвитку бізнесу</h2>
//                 <p>Аудит бізнес-процесів | Допомога у трансформації | Корпоративне навчання | Центри оцінювання | Розроблення матриці/таксономії навичок для співробітників компанії</p>
//               </div>
//             </div>
//             <div className='content-block-cooperate'>
//               <div className='img-cooperate'>
//                 <img alt='icon-cooperate'/>
//               </div>
//               <div className='text-block-cooperate'>
//                 <h2>Кар’єрна терапія</h2>
//                 <p>Розбір особистого запиту | Постановка чітких цілей | Створення індивідуального плану розвитку | Сприяння процесу вдосконалення</p>
//               </div>
//             </div>
//           </div>
//           <div className='text-cooperate'>
//             <h1>Давайте співпрацювати</h1>
//             <p>В роботі я застосовую проєктний підхід. Там, де є чітке бачення фінального результату, ми можемо визначити кінцевий термін, обсяг і ресурси, необхідні для досягнення будь-якої, навіть найамбітнішої мети.</p>
//             <Button className='standart' text='Напишіть мені' />
//           </div>
//         </section>
//     )
// }


export default function Cooperate() {
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

  return (
    <section className="bg-[#28a0b5] justify-center">
     <div className="flex flex-col-reverse  max-w-[1600px]  lg:flex-row justify-between items-start px-8 md:px-16 py-24 ">
       {/* Левая колонка — карточки */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-10 mb-16 lg:mb-0">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl flex items-start p-6 shadow-md min-w-[280px] max-w-md transition-transform hover:scale-[1.02]"
          >
            <div className="flex max-w-[60px] ">
              <img src={item.icon} alt={item.title} className="w-full " />
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
      <div className="text-white w-full p-10 lg:w-[45%]">
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
