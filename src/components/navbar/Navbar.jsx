import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#">Hakkımızda</a>
    </p>
    <p>
      <a href="#">Kiralama Koşulları</a>
    </p>
    <p>
      <a href="#">Kampanyalar</a>
    </p>
    <p>
      <a href="#">Araçlar</a>
    </p>
    <p>
      <a href="#">Rezervazyonlarım</a>
    </p>
    <p>
      <a href="#">İletişim</a>
    </p>
  </>
);
// BEM --> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rent2go__navbar">
      <div className="rent2go__navbar-links">
        <div className="rent2go__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="rent2go__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="rent2go__navbar-sign">
        <p>Giriş Yap</p>
        <button type="button">Kayıt Ol</button>
      </div>
      <div className="rent2go__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#333538"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#333538"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="rent2go__navbar-menu_container scale-up-center">
            <div className="rent2go__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="rent2go__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
