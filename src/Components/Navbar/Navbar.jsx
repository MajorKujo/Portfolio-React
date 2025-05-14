import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {ReactComponent as MenuOpen} from '../../assets/menu-burger.svg'
import {ReactComponent as CloseIcon} from '../../assets/cross.svg'
const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right='0'
  }
  const closeMenu =()=>{
    menuRef.current.style.right='-350px'
  }

  return (
    <div className='navbar'>
      <MenuOpen style={{width: 24, height: 24,fill:'white'}} className="nav-mob-open" onClick={openMenu}/>
        <ul ref={menuRef} className='nav-menu'>
          <CloseIcon style={{width: 14, height: 14,fill:'white'}} className="nav-mob-close" onClick={closeMenu}/>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==="home"?<img src=""></img>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==="about"?<img src=""></img>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu('projects')}>Projects</p></AnchorLink>{menu==="projects"?<img src=""></img>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==="contact"?<img src=""></img>:<></>}</li>
        </ul>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
        <div className="nav-connect">Connect with me</div>
        </AnchorLink>
    </div>
  )
}

export default Navbar