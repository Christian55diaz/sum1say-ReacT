// imports
import React, { useState } from "react";
import "../Navbar.css";

// navbar function
function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
    //   setup the return call function
    // navbar list
    return (
          <ul className={active}>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
    )
}