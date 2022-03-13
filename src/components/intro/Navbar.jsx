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