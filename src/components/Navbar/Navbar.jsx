import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets";
import { links } from "../../constants/constants";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const linkRef = useRef();
  const menuRef = useRef();

  const handleClick = () => {
    linkRef.current.classList.add("active");
    menuRef.current.children[0].classList.add("closed");
    menuRef.current.children[1].classList.add("active");
  };

  const handleClose = () => {
    linkRef.current.classList.remove("active");
    menuRef.current.children[0].classList.remove("closed");
    menuRef.current.children[1].classList.remove("active");
  };

  const handleClicked = () => {
    linkRef.current.classList.remove("active");
    menuRef.current.children[0].classList.remove("closed");
    menuRef.current.children[1].classList.remove("active");
  };

  return (
    <header className="navbar__header">
      <div className="navbar__logo">
        <img src={logo} alt="planet" />
        <h1>Space Travelers' Hub</h1>
      </div>
      <nav className="navbar__links" ref={linkRef}>
        <ul>
          {links.map((link, idx) => (
            <div key={link.name} style={{display: 'flex', gap: '0.5rem'}}>
              <NavLink
                onClick={handleClicked}
                key={link.name}
                to={link.path}
                className="link"
                style={({ isActive }) => {
                  if (isActive) {
                    return { textDecoration: "underline" };
                  }
                }}>
                {link.name}
              </NavLink>
            </div>
          ))}
        </ul>
      </nav>
      <div className="toggleMenu" ref={menuRef}>
        <HiMenuAlt3 className="menu" onClick={handleClick} />
        <HiX className="close" onClick={handleClose} />
      </div>
    </header>
  );
};

export default Navbar;
