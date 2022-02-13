import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <div className='header'>  <Link to="/cart" className="cart">CART</Link></div>
  )
}

export default Header