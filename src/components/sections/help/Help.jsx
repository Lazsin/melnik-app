import Button from '../../Button/Button'
// import './Help.css'

// export default function Help(){
//     return(
//         <section className='help'>
//           <div className='help-text'>
//             <h1 className='help-title'>Давайте обговоримо, чим я можу вам допомогти?</h1>
//             <p>Запишіться на безоплатну 30-хвилинну онлайн-консультацію, і я зв’яжуся з вами, щоб узгодити час</p>
//           </div>
//           <form className='help-form'>
//             <input type="text" placeholder="Your name" />
//             <input type="email" placeholder="Email address" />
//             <input type="text" placeholder="Subject" />
//             <textarea placeholder="Write your message here"></textarea>
//             <Button text='Send Massage'/>
//           </form>
//         </section>
//     )
// }


export default function Help() {
  return (
    <section className=" bg-[#f7f7fb] ">
      
      <div className=' text-center grid mx-auto py-24 px-6 justify-center max-w-[500px]'>
      <div className="help-text mb-10">
        <h1 className="text-4xl font-semibold mb-4 text-gray-800">
          Давайте обговоримо, чим я можу вам допомогти?
        </h1>
        <p className="mx-auto w-[70%] text-xl leading-relaxed text-gray-700">
          Запишіться на безоплатну 30-хвилинну онлайн-консультацію, і я зв’яжуся з вами, щоб узгодити час
        </p>
      </div>

      <form className="grid justify-items-center w-full">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-3 mb-5 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 mb-5 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 mb-5 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
        />
        <textarea
          placeholder="Write your message here"
          rows="4"
          className="w-full p-3 mb-6 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300 resize-none"
        />
        <Button text="Send Message" className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"/>
      </form>
      </div>
    </section>
  )
}
