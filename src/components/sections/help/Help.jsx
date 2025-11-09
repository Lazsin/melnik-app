import Button from '../../Button/Button'

import { useEffect, useRef, useState } from "react";

export default function Help() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 👈 чтобы анимация проигралась только один раз
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f7f7fb] overflow-hidden flex justify-center"
    >
      <div
        className={`text-center grid mx-auto py-24 px-6 justify-center max-w-[500px] transform transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }`}
      >
        {/* Текст */}
        <div className="help-text mb-10">
          <h1 className="text-4xl font-semibold mb-4 text-gray-800">
            Давайте обговоримо, чим я можу вам допомогти?
          </h1>
          <p className="mx-auto w-[70%] text-xl leading-relaxed text-gray-700">
            Запишіться на безоплатну 30-хвилинну онлайн-консультацію, і я
            зв’яжуся з вами, щоб узгодити час
          </p>
        </div>

        {/* Форма */}
        <form className="grid justify-items-center w-full space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
          />
          <textarea
            placeholder="Write your message here"
            rows="4"
            className="w-full p-3 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300 resize-none"
          />
          <Button
            text="Send Message"
            className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"
          />
        </form>
      </div>
    </section>
  );
}


// export default function Help() {
//   return (
//     <section className=" bg-[#f7f7fb] ">
      
//       <div className=' text-center grid mx-auto py-24 px-6 justify-center max-w-[500px]'>
//       <div className="help-text mb-10">
//         <h1 className="text-4xl font-semibold mb-4 text-gray-800">
//           Давайте обговоримо, чим я можу вам допомогти?
//         </h1>
//         <p className="mx-auto w-[70%] text-xl leading-relaxed text-gray-700">
//           Запишіться на безоплатну 30-хвилинну онлайн-консультацію, і я зв’яжуся з вами, щоб узгодити час
//         </p>
//       </div>

//       <form className="grid justify-items-center w-full">
//         <input
//           type="text"
//           placeholder="Your name"
//           className="w-full p-3 mb-5 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
//         />
//         <input
//           type="email"
//           placeholder="Email address"
//           className="w-full p-3 mb-5 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
//         />
//         <input
//           type="text"
//           placeholder="Subject"
//           className="w-full p-3 mb-5 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300"
//         />
//         <textarea
//           placeholder="Write your message here"
//           rows="4"
//           className="w-full p-3 mb-6 border placeholder-neutral-600 border-gray-300 rounded-lg bg-white text-gray-800 text-base outline-none focus:border-[#25a0b5] focus:ring-2 focus:ring-[#25a0b5] transition duration-300 resize-none"
//         />
//         <Button text="Send Message" className="bg-[#ffbc64] mx-10 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"/>
//       </form>
//       </div>
//     </section>
//   )
// }
