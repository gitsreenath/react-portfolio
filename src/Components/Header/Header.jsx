import React from 'react'
import './Header.css'
import LTD from './LTD'
import ME from '../../assets/me.png'
import Social from './Social'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>SreeNath</h1>
        <h5 className="text-light">Ui Developer</h5>
        <LTD/>
        <Social/>
        <div className="me">
          <img src={ME} alt="mypic" />
        </div>
        <a href="#contacts" className='scroll_down' >Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header