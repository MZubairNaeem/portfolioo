/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import './header.css';

// imported react icons
import {BiMenu} from 'react-icons/bi';
import {BiX} from 'react-icons/bi';

const Header = () => {
  return (
    <div className="header">
      <input type="checkbox" id="check" />
        <label for="check">
            <BiMenu id="checkbtn" />
            <BiX id="cancel" />
        </label>

        <ul className="unOrder">
      <li className="list"><a href="#home">Home 🏡</a></li>
      <li className="list"><a href="#about">About ℹ️</a></li>
      <li className="list"><a href="#portfolio">Portfolio 📜</a></li>
      <li className="list"><a href="#footer">Contact 📱</a></li>
      </ul>

    </div>
  );
};

export default Header;
