import React from 'react'
// import CV from '../../assets'
import cv from '../../assets/cv.docx'


const LTD = () => {
  return (
    <div className="ltd">
        <a href={cv} download className='btn'>Download</a>
        <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default LTD