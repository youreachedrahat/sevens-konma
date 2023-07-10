import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import HorizontalRule from "../HorizontalRule"
import "./Header.css"

function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [menuRotation, setMenuRotation] = useState(0);
    const toggleMenu = () => {
     
        setMenuOpen(!isMenuOpen);
        setMenuRotation(isMenuOpen ? 0 : -90);
    };
  return (

<header>
<nav class="bg-primary">
  <div class="w-[100%] flex flex-wrap items-center justify-between mx-auto p-4 px-14">
    <Link to="/" class="flex items-center z-[101]">
        <img src={logo} class="h-10 sm:h-16 lg:h-20" alt="Sevens Logo" />
        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" style={{ transform: `rotate(${menuRotation}deg)` }} onClick={toggleMenu} class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden z-[101]" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border items-center rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <Link to="/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-transparent md:p-0 " aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/betting" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-transparent md:p-0 ">Services</Link>
        </li>
        <li>
          <Link to="/about" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-transparent md:p-0 ">Software Solution</Link>
        </li>
        <li>
          <Link to="solution" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-transparent md:p-0 ">Contact</Link>
        </li>
        
        <li>
        <Link className="Links max-sm:hidden" to='/casino'>
        <div className="master-primary-button1 text-white font-normal">
          <b className="home">Get started</b>
        </div>
        </Link>
        </li>
      </ul>
    </div>
    <div className={`overlay ${isMenuOpen ? "fixed" : "hidden"} w-screen h-screen`}>
  <div className="overlay-items w-screen h-screen flex flex-col text-white">
          <Link className="Links" to="/"  onClick={toggleMenu}>
            <div className="home">Home</div>
          </Link>
          <Link className="Links" to="/betting" onClick={toggleMenu}>
            <div className="home">Services</div>
          </Link>
          <Link className="Links" to="/aboutus"  onClick={toggleMenu}>
            <div className="home">Software Solutions</div>
          </Link>
          <Link className="Links" to="/solution"  onClick={toggleMenu}>
            <div className="home">Contact</div>
          </Link>
          <Link className="Links" to="/casino"  onClick={toggleMenu}>
            <div className="home">5th page (temp)</div>
          </Link>

        </div>
        <div className="HeaderEllipseBox">
<div className="HeaderEllipse-wrapper">
<div className="HeaderEllipse" />
</div>
</div>
      </div>
  </div>
</nav>
<HorizontalRule/>
</header>
  )
}

export default Header