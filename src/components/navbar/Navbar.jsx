import React from 'react'
import "./navbar.scss"
import {BsShopWindow} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"
import {MdLogout} from "react-icons/md"
import {FiShoppingCart} from "react-icons/fi"

function Navbar() {
  return (
    <nav className='navbar'>
        <a href="#" className='navbar__logo'>
            <BsShopWindow/> ShopStore
        </a>
        <ul className='navbar__ul'>
            <li className="navbar__li"><a href="#" className='navbar__link'>Home</a></li>
            <li className="navbar__li"><a href="#" className='navbar__link'>Details</a></li>
            <li className="navbar__li"><a href="#" className='navbar__link'>Products</a></li>
            <li className="navbar__li"><a href="#" className='navbar__link'>Prices</a></li>
            <li className="navbar__li"><a href="#" className='navbar__link'>Contact Us</a></li>
        </ul>
        <div className="navbar__icons">
           <div className='navbar__cart'>
                <FiShoppingCart className='navbar__cartIcon'/>
                <span className='navbar__span'>0</span>
           </div>
           <p className='navbar__log'>
                <BiUserCircle className='navbar__userIcon'/> <MdLogout className='navbar__logIcon'/> 
           </p>
        </div>
    </nav>
  )
}

export default Navbar