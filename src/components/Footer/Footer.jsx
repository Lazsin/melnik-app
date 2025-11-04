import './Footer.css'
import logo from '../../assets/img/logo_white.png'
// export default function Footer(){
//     return(
//         <footer >
//           <img className='logo' src={logo} alt='logo-footer'></img>
//           <p className='text-footer'>© 2025 Maryna Melnyk, All Rights Reserved</p>
//         </footer>
//     )
// }

export default function Footer() {
  return (
    <footer className="bg-[#2290a3] flex justify-center">
    <div className='flex flex-col max-w-1600px md:flex-row items-center justify-between px-6 md:px-10 py-6 '>
        <img
        src={logo}
        alt="footer logo"
        className="h-10 mb-4 mx-10 md:mb-0 object-contain"
      />
      <p className="text-white text-sm text-center md:text-right">
        © 2025 Maryna Melnyk, All Rights Reserved
      </p>
    </div>
    </footer>
  );
}
