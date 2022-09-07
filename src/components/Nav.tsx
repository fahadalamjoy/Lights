import { useRef } from 'react'
import './Navbar.css'
// import Logo from '../../assets/logo.png'
import logo from '../assets/logo.png'
import {FaBars,FaTimes} from 'react-icons/fa'


function Nav() {
  const navRef = useRef()

  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <div className='main-nav container'>
      
      <header className='container'>
          <img className='logo' src={logo} alt='logo'/>
          <nav ref={navRef}>
            <ul className='Nav_links my-auto pt-3'>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
            </ul>
              <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                  <FaTimes/>
              </button>
              <button className='nav-btn ' onClick={showNavbar}>
                  <FaBars/>
              </button>
          </nav>
          <a className='cta' href='#'><button>Contact Us</button></a>
      </header>
    </div>
  )
}

export default Nav