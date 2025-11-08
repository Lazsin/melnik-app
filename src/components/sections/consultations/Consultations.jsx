
import Button from '../../Button/Button'
// import './Consultations.css'
// export default function Consultations(){
//     return(
//         <section className='consultations'>
//             <h1 className='consultations-title'>Консультації з розвитку бізнесу</h1>
//             <div className='consultations-block'>
//                 <div className='consultation-content-card'>
//                 <h1>Аудит бізнес-процесів</h1>
//                 <p>Аудит допоможе вам визначити початковий запит, зрозуміти основну проблему бізнес-процесів та отримати систематизований підхід до вашого запиту.</p>
//                 <Button text='Дивитись більше'/>
//                 </div>
//                 <div className='consultation-content-card'>
//                 <h1>Центр оцінювання персоналу</h1>
//                 <p>Після одноденного заходу, під час якого співробітники виконують різні вправи в групах та індивідуально, кожен отримує деталізований особистий звіт про свої сильні сторони та зони розвитку.</p>
//                 <Button text='Дивитись більше'/>
//                 </div>
//                 <div className='consultation-content-card'>
//                 <h1>Матриця навичок в компанії</h1>
//                 <p>Розроблення матриці компетенцій — це повне наскрізне делегування підходів персоналу для його росту та розвитку.</p>
//                 <Button text='Дивитись більше'/>
//                 </div>
//             </div>
//             <h1 className='consultations-title'>Консультації з кар’єрних питань</h1>
//             <div className='consultations-block'>
//                 <div className='consultation-content-card'>
//                 <h1>Кар'ерна терапія</h1>
//                 <p>Визначимо сфери діяльності, де ви могли б найкраще реалізувати свій потенціал, а також використати знання й навички, отримані в університеті.</p>
//                 <Button text='Дивитись більше'/>
//                 </div>
//                 <div className='consultation-content-card'>
//                 <h1>Підготовка до співбесіди</h1>
//                 <p>Після годинного відеодзвінка ви будете впевнені, що успішно пройдете співбесіду з HR або керівником компанії.</p>
//                 <Button text='Дивитись більше'/>
//                 </div>
//                 <div className='consultation-content-card'>
//                 <h1>Створення резюме</h1>
//                 <p>Допоможу скласти резюме, навіть якщо вам майже нічого вказати в графі «Досвід роботи».</p>
//                 <Button text='Дивитись більше'/>
//                 </div>
//           </div>
//         </section>
//     )
// }

export default function Consultations() {
  const businessConsultations = [
    {
      title: "Аудит бізнес-процесів",
      text: "Аудит допоможе вам визначити початковий запит, зрозуміти основну проблему бізнес-процесів та отримати систематизований підхід до вашого запиту.",
    },
    {
      title: "Центр оцінювання персоналу",
      text: "Після одноденного заходу, під час якого співробітники виконують різні вправи в групах та індивідуально, кожен отримує деталізований особистий звіт про свої сильні сторони та зони розвитку.",
    },
    {
      title: "Матриця навичок в компанії",
      text: "Розроблення матриці компетенцій — це повне наскрізне делегування підходів персоналу для його росту та розвитку.",
    },
  ];

  const careerConsultations = [
    {
      title: "Кар’єрна терапія",
      text: "Визначимо сфери діяльності, де ви могли б найкраще реалізувати свій потенціал, а також використати знання й навички, отримані в університеті.",
    },
    {
      title: "Підготовка до співбесіди",
      text: "Після годинного відеодзвінка ви будете впевнені, що успішно пройдете співбесіду з HR або керівником компанії.",
    },
    {
      title: "Створення резюме",
      text: "Допоможу скласти резюме, навіть якщо вам майже нічого вказати в графі «Досвід роботи».",
    },
  ];

  return (
    <section className="pt-12 pb-24 bg-[#f7f7fb] text-gray-800">
      {/* Заголовок 1 */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#28a0b5] text-center mt-6 mb-10">
        Консультації з розвитку бізнесу
      </h1>

      {/* Блок карточек */}
      <div className="flex flex-col md:flex-row justify-center items-stretch flex-wrap gap-8 px-4 md:px-12">
        {businessConsultations.map((item, index) => (
          <div
            key={index}
            className="grid content-between max-w-[400px] min-w-[250px] self-center bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h1 className="text-[#28a0b5] text-xl font-semibold mb-2">
              {item.title}
            </h1>
            <p className="text-gray-600 mb-4">{item.text}</p>
            <Button text="Дивитись більше" className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all" />
          </div>
        ))}
      </div>

      {/* Заголовок 2 */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#28a0b5] text-center mt-16 mb-10">
        Консультації з кар’єрних питань
      </h1>

      {/* Блок карточек */}
      <div className="flex flex-col md:flex-row justify-center items-stretch flex-wrap gap-8 px-4 md:px-12">
        {careerConsultations.map((item, index) => (
          <div
            key={index}
            className="grid content-between max-w-[400px] min-w-[250px] self-center bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h1 className="text-[#28a0b5] text-xl font-semibold mb-2">
              {item.title}
            </h1>
            <p className="text-gray-600 mb-4">{item.text}</p>
            <Button text="Дивитись більше" className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all" /> 
          </div>
        ))}
      </div>
    </section>
  );
}
