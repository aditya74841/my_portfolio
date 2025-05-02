import React from "react";
import "./nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        title="Go to Home Section"
        aria-label="Home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title="Go to About Section"
        aria-label="About"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        title="Go to Experience Section"
        aria-label="Experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        title="Go to Services Section"
        aria-label="Services"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        title="Go to Contact Section"
        aria-label="Contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
