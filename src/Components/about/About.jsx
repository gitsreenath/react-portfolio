import React from 'react'
import './About.css'
import mypic from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {BiLibrary} from 'react-icons/bi'

const About = () => {
  return (
    <section id='About'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container ">
        <div className="about_me">
          <div className="about_me_img">
            <img src={mypic} alt="mypic" />

          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>8+ Years working experience</small>
            </article>
            <article className='card'>
              <HiOutlineUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>100+ Satisfied Clients</small>
            </article>
            <article className='card'>
              <BiLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>100+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid cupiditate illum repellat alias eius, reprehenderit accusamus, mollitia est tempora corrupti excepturi odio dolorem ex! Non dolorum exercitationem consequatur voluptas!</p>
          <a href="#Contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About