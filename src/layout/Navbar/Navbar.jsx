import React from 'react'

import { NavLink } from 'react-router-dom'

import { GiHamburger } from 'react-icons/gi'

import './Navbar.css'

import logo from '../../images/bh_logo.svg'

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className='header_nav'>
          <NavLink to="/" className="logo">
            <h4>Burger <img src={logo} alt="" /> House</h4>
          </NavLink>
          <ul className='header_nav-ul'>
            <li><NavLink to="/addorder">Add Order</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar