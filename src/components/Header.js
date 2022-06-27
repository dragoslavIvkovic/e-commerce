//import React from 'react'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

import imglogo from "../img/logo-header.png";
import { FavoriteBorder } from "@styled-icons/material/FavoriteBorder";
import { ShoppingBag } from "@styled-icons/boxicons-solid/ShoppingBag";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { Menu } from "@styled-icons/entypo/Menu";

import styled from "styled-components";

const Header = () => {
  let [searchText, setTxt] = useState();

  return (
    <header className="page-header">
      <Link to="/" className="logo">
        <img src={imglogo} alt="website logo" />
      </Link>

      <div className="nav-toggle">
        <input type="checkbox" id="check-menu" checked />
        <label htmlFor="check-menu" aria-label="Check Menu">
          <Menu aria-label="menu" />
        </label>
        <nav aria-label="Primary" className="navigation">
          <ul className="menu">
            <li>
              <Link to="/"> Shop </Link>
            </li>
            <li>
              <Link to="/men"> Men </Link>
            </li>
            <li>
              <Link to="/women"> Women </Link>
            </li>
            <li>
              <Link to="/kids"> Kids </Link>
            </li>

            <FavoriteBorder />

            <ShoppingBag />
          </ul>
        </nav>
      </div>

      <form className="search" id="search">
        <label htmlFor="find" aria-label="Search"></label>
        <input
          type="search"
          name="find"
          id="find"
          placeholder="Search..."
          onChange={() => setTxt(event.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
        />
        <button type="button" aria-label="findsubmit">
          <Link to={`/search/${searchText}`}>
            <Search aria-label="search" />
          </Link>
        </button>
      </form>

      {/* <ul className="your-products">
				<li><a href="#" aria-label="favorite"> 
					<FavoriteBorderIconStyled/>
				</a></li>
				<li><a href="#" aria-label="cart"> 
					<ShoppingBag/>
				</a></li>
			</ul> */}
    </header>
  );
};

export default Header;
