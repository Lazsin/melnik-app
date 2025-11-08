import Button from "../Button/Button"
import logo from '../../assets/img/logo_blue.png'
import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white flex justify-center relative z-50">
      <div className="flex items-center max-w-[1600px] justify-around px-4 py-6 w-full">
        {/* Логотип */}
        <div className="flex">
          <img src={logo} alt="logo" className="h-10 mx-4 object-contain" />
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <p className="cursor-pointer hover:text-[#28a0b5] transition-colors">Статті</p>
          <p className="cursor-pointer hover:text-[#28a0b5] transition-colors">Мої проекти</p>
          <p className="cursor-pointer hover:text-[#28a0b5] transition-colors">Послуги</p>
          <p className="cursor-pointer hover:text-[#28a0b5] transition-colors">Українська</p>
        </nav>

        {/* Кнопка */}
        <div className="hidden md:block">
          <Button
            className="bg-[#ffbc64] mx-6 hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"
            text="Contact"
          />
        </div>

        {/* Бургер */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#28a0b5] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#28a0b5] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#28a0b5] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Фон с блюром — под меню */}
        {menuOpen && (
          <div
            className="fixed inset-0 backdrop-blur-md bg-transparent z-40 transition-all duration-500"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Мобильное меню */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-xl transform transition-transform duration-500 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-start gap-6 text-lg font-medium text-gray-800 p-8 mt-16">
            <p className="cursor-pointer hover:text-[#28a0b5]">Статті</p>
            <p className="cursor-pointer hover:text-[#28a0b5]">Мої проекти</p>
            <p className="cursor-pointer hover:text-[#28a0b5]">Послуги</p>
            <p className="cursor-pointer hover:text-[#28a0b5]">Українська</p>
            <Button
              className="bg-[#ffbc64] hover:bg-[#09292e] text-white font-semibold px-6 py-2 rounded-xl transition-all"
              text="Contact"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
