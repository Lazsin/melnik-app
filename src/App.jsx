import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import BusinessCard from './components/sections/business-card/BusinessCard'
import Consultations from './components/sections/consultations/Consultations'
import ContactMe from './components/sections/contact-me/ContactMe'
import Cooperate from './components/sections/cooperate/Cooperate'
import Experience from './components/sections/experience/Experience'
import Help from './components/sections/help/Help'
import Projects from './components/sections/projects/Projects'

export default function App() {
  return (
    <>
      <Header/>
      <BusinessCard/>
      <Cooperate/>
      <Experience/>
      <Consultations/>
      <Projects/>
      <Help/>  
      <ContactMe/>
      <Footer/>

    </>
  )
}

