import Button from "../../Button/Button"
import business_card_img from '../../../assets/img/BusinessCard.bmp'
import { useEffect, useRef, useState } from "react";


export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
       ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target) // ← 💡 Снимаем наблюдение после первого появления
      }
    },
      { threshold: 0.2 } // показывать, когда 20% секции видно
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white flex justify-center overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-around items-center px-2 md:px-4 md:py-8">
        {/* Текстовый блок */}
        <div
          className={`transition-all duration-700 ease-out transform
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-y-50 opacity-0"
            }
            flex flex-col items-start max-w-xl text-center md:text-left z-10 md:-mr-40 lg:-mr-1`}
        >
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
        <div>
          <img
            src={business_card_img}
            alt="business card"
            className="md:m-0 mb-0 sm:-mt-40 sm:mr-0 -mt-40 -mr-30 translate-x-20 sm:translate-x-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
}