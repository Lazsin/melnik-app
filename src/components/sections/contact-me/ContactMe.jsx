import './ContactMe.css'
import telegram from '../../../assets/img/telegram-svgrepo-com.svg'
import email from '../../../assets/img/email-1-svgrepo-com.svg'
import lin from '../../../assets/img/linked-in-logo-of-two-letters-svgrepo-com.svg'
import fb from '../../../assets/img/facebook-176-svgrepo-com.svg'
import insgrm from '../../../assets/img/instagram-svgrepo-com.svg'


export default function ContactMe() {
  const contacts = [
    { icon: telegram, title: "Telegram me", value: "@marmeliko" },
    { icon: email, title: "Email me", value: "marmeliko@gmail.com" },
    { icon: lin, title: "Connect me", value: "linkedin.com/in/marmeliko" },
    { icon: fb, title: "Friend me", value: "facebook.com/marmeliko" },
    { icon: insgrm, title: "Follow me", value: "instagram.com/marmeliko" },
  ];

  return (
    <section className="bg-[#28a0b5] flex justify-center">
      <div className='flex flex-wrap max-w-[1600px] justify-center gap-10 md:gap-16 py-24 text-center text-nowrap font-normal '>
        {contacts.map((c, idx) => (
        <div key={idx} className="w-40 flex flex-col items-center space-y-2">
          <img src={c.icon} alt={c.title} className="w-9 h-9 mb-1" />
          <h1 className="text-white text-base font-medium whitespace-nowrap">
            {c.title}
          </h1>
          <p className="text-white text-sm break-all">{c.value}</p>
        </div>
      ))}
      </div>
    </section>
  );
}