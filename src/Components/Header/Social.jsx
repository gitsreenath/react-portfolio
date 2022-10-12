import React from 'react'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Social = () => {
  return (
    <div className="header_social">
        <a href="https://www.linkedin.com/in/sreenathg-here" target="_blankc"><BsLinkedin/></a>
        <a href="https://www.instagram.com/sree_sreenath_/" target="_blankc"><BsInstagram/></a>
        <a href="#" target="_blankc"><BsFacebook/></a>
    </div>
  )
}

export default Social