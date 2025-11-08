import Button from "../../Button/Button"
import business_card_img from '../../../assets/img/BusinessCard.bmp'
// import './BusinessCard.css'
// export default function BusinessCard(){
//     return(
//         <section className='business-card'>
//           <div className='content-business-card'>
//             <div className='text-business-card'>
//                 <h1 className='title-business-card'>Консультант із розвитку бізнесу та особистості</h1>
//                 <div class="name-line">
//                     <span class="line"></span>
//                     <span class="name">Марина Мельник</span>
//                 </div>
//                 <Button className='standart' text='Дізнатись більше'/>

//             </div>
//           </div>
//           <img src={business_card_img} alt="business-card-img"></img>
//         </section>
//     )
// }


// export default function BusinessCard() {
//   return (
//     <section className="bg-white flex justify-center">
//       <div className="flex flex-col md:flex-row max-w-[1600px] justify-around items-center px-8 md:px-16 py-16">
//         {/* Текстовый блок */}
//       <div className="flex flex-col items-start max-w-xl text-center md:text-left z-10">
//         <h1 className="text-4xl md:text-4xl font-semibold mb-4 text-gray-800">
//           Консультант із розвитку бізнесу та особистості
//         </h1>

//         {/* Имя с линией */}
//         <div className="flex items-center gap-4 mb-6">
//           <span className="flex-1 h-0.5 rounded-full bg-[#28a0b5] w-6"></span>
//           <span className="text-lg font-semibold text-gray-700 whitespace-nowrap">
//             Марина Мельник
//           </span>
//         </div>

//         {/* Кнопка */}
//         <Button
//           className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"
//           text="Дізнатись більше"
//         />
//       </div>

//       {/* Изображение */}
//       <img
//         src={business_card_img}
//         alt="business card"
//         className="mt-10 md:mt-0 h-[400px] md:h-[600px] w-auto object-contain"
//       />
//       </div>
//     </section>
//   );
// }
export default function BusinessCard() {
  return (
    <section className="bg-white flex justify-center overflow-hidden">
      <div className="flex flex-col md:flex-row justify-around items-center px-2 md:px-4 md:py-8">
        {/* Текстовый блок */}
        <div className="flex flex-col items-start max-w-xl text-center md:text-left z-10 md:-mr-40 lg:-mr-1">
          <h1 className="text-3xl md:text-6xl font-semibold mb-4 text-[#28a0b5]">
            Консультант із розвитку бізнесу та особистості
          </h1>

          {/* Имя с линией */}
          <div className="flex items-center gap-4 mb-6">
            <span className="flex-1 h-0.5 rounded-full bg-[#28a0b5] w-6"></span>
            <span className="text-lg font-semibold text-gray-700 whitespace-nowrap">
              Марина Мельник
            </span>
          </div>

          {/* Кнопка */}
          <Button
            className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"
            text="Дізнатись більше"
          />
        </div>

        {/* Изображение */}
        <div className="">
          <img
            src={business_card_img}
            alt="business card"
            className="md:m-0 md:translate-0 mb-0 sm:-mt-40 sm:mr-0 -mt-40 -mr-30 translate-x-20 sm:translate-x-20  object-contain "
          />
        </div>
      </div>
    </section>
  );
}

