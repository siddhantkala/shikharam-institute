import React from 'react'
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import shikharam_logooo from "../../assets/shikharam_logooo.png";

const Header = () => {
  const [menuOpened, setMenuOpened]=useState(false)
  const getMenuStyles = (menuOpened)=>{
    if(document.documentElement.clientWidth<=800)
    {
      return {right:!menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className='flexCenter paddings innerWidth h-container'>
            {/* <img src='./logo.png'  */}
            <img src={shikharam_logooo} 
            alt='logo' width={200}/>
            <OutsideClickHandler
            onOutsideClick={()=>setMenuOpened(false)}>
            <div className='flexCenter h-menu'
            style={getMenuStyles(menuOpened)}>
                <a href=''>Home</a>
                <a href=''>Courses</a>
                <a href=''>Videos</a>
                <a href=''>Our Value</a>
                <a href=''>Contact Us</a>
                <button className='button'><a href=''>Contact</a></button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
    </section>
  )
}

export default Header