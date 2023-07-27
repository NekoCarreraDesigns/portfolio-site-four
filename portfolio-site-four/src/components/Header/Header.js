import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className='header-wrapper'>
        <header className='page-header'>
          Aloha, Welcome to Neko Carrera Designs!
        </header>
        <p className='header-paragraph'>
          Thanks for visiting the site, you will find various projects created
          by Neko Carrera Designs featured here. There is also some fun games to
          play if you get bored. Don't worry I won't tell your boss, lol
        </p>
      </div>
    </>
  );
};

export default Header;
