import { useEffect, useRef, useState } from 'react';
import logoImg from './../../img/icons/logo.svg'
import './header.css'

function Header(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuBtn = useRef();

  function handleOpenMenu(e){
    // let val = menuBtn.current.classList;
    // val.toggle('active');
    // console.log(val);
    setIsModalOpen(true);
    // console.log('active');
  }

  function handleCloseMenu(){
    setIsModalOpen(false);
    console.log('close');
  }

  // useEffect(()=>{

  // },
  // [isModalOpen])

  return(
    <header className='header'>
      <div className="container">
        <div className="header-row">
          
          <div className="header-logo">
            <a href="#!" className="header-logo-link">
              <img src={logoImg} alt="" />
              <span>Fashion</span>
            </a>
            
          </div>
          <nav className="header-nav">
            <ul className={isModalOpen ? 'header-nav-menu menu-open' : 'header-nav-menu'} >
              <span className='menu-close-btn' onClick={handleCloseMenu}>&times;</span>
              <li><a href="#!" className='header-nav-link'>CATALOGUE</a></li>
              <li><a href="#!" className='header-nav-link'>FASHION</a></li>
              <li><a href="#!" className='header-nav-link'>FAVOURITE</a></li>
              <li><a href="#!" className='header-nav-link'>LIFESTYLE</a></li>
              <li><a href="#!" className='header-nav-btn'>SIGN UP</a></li>
            </ul>

            {/* {
              isModalOpen && (

              )
            } */}

            <div className="header-menu-btn" onClick={handleOpenMenu} ref={menuBtn}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>

          
        </div>
      </div>
    </header>
  )
}

export default Header