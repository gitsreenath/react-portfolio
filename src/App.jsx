import React from 'react'
import About from './Components/about/About'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Contact from './Components/Contacts/Contact'
import Experiance from './Components/Experiance/Experiance'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>      
      <Nav/>
      <About/>
      <Experiance/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App