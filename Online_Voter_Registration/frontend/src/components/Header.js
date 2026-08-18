import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
