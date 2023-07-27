import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='page-nav'>
      <a className='nav-link' href='/'>
        Home
      </a>
      {"  "}
      <a className='nav-link' href='/projects'>
        Projects
      </a>
      {"  "}
      <a className='nav-link' href='/contact'>
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
