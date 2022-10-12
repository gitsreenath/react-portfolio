import React from 'react'
import {BsFacebook, BsLinkedin,BsInstagram} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
<footer>
    {/* <a href="#">LOGO</a> */}
    <ul className='uselinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experiance">Experiance</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>

    </ul>
    <div className="footer_socials">
        <a href="#" ><BsFacebook/></a>
        <a href="#"><BsLinkedin/></a>
        <a href="#"><BsInstagram/></a>
    </div>
    <div className="copy_right">
        <a href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, blanditiis!</a>
    </div>
</footer>
  )
}

export default Footer