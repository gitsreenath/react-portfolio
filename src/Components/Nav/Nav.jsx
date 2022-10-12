import React from 'react'
import './Nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {GiBookshelf} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'

import {useState} from 'react'

const Nav = () => {
  const[activenav,setactivenav]=useState('#')
  console.log("active nav:" + activenav)

  return (
    <nav>
      
      <a href="#" onClick={()=>setactivenav("#")} className={activenav==='#'?'active':''} ><AiOutlineHome/></a>
      
      <a href="#About" onClick={()=>setactivenav("#about")} className={activenav==="#about"?'active':''} ><AiOutlineUser/></a>

      {/* <a href="#Experiance" onClick={()=>setactivenav("#Experiance")} className={activenav==="#Experiance"?'active';''} ><GiBookshelf/></a> */}
      <a href="#Experiance" onClick={()=>setactivenav('#Experiance')} className={activenav==="#Experiance" ? 'active' : ""}><GiBookshelf/></a>
      <a href="#Portfolio" onClick={()=>setactivenav("Portfolio")} className={activenav==="#Portfolio"?'active':''}><RiServiceLine/></a>
      <a href="#Contact" onClick={()=>setactivenav("#Contact")} className={activenav==='#Contact'?'active':''}><MdOutlineMessage/></a>
      
      </nav>
      
  )
  // console.log("active nav:" + activenav)
}

export default Nav