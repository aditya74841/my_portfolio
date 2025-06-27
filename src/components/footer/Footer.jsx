import React, { useEffect, useState } from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import SEO from "../../SEO";
import axios from "axios";

const Footer = () => {
  const [serverMessage, setServerMessage] = useState("");
  useEffect(() => {
    const healthCheck = async () => {
      //      https://portfolio-server-8zb7.onrender.com/
      //   http://localhost:8080
      const response = await axios.get(
        "https://portfolio-server-8zb7.onrender.com/health-check"
      );
      setServerMessage(response.data.message);
    //   console.log("server is running", response);
    };
    healthCheck();
  }, []);
  return (
    <>
      <SEO
        title="Aditya Ranjan | Footer"
        description="Explore the footer of Aditya Ranjan's website. Find links to social media profiles and the navigation menu."
        keywords="Aditya Ranjan, GitHub, Instagram, LinkedIn, Footer, Portfolio"
      />
      <footer>
        <a href="#home" className="footer__logo">
          Aditya Ranjan
        </a>

        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://github.com/aditya74841">
            {" "}
            <FaGithub />{" "}
          </a>
          <a href="https://www.instagram.com/aditya___ranjan_/">
            {" "}
            <FiInstagram />{" "}
          </a>
          <a href="https://www.linkedin.com/in/aditya-ranjan-56331b1b7/">
            {" "}
            <FaLinkedin />{" "}
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Aditya Ranjan.All rights reserved</small>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm">
            <span
              className={`h-2 w-2 rounded-full ${
                serverMessage ? "bg-green-600" : "bg-red-500"
              } animate-pulse`}
            ></span>
            <small className="text-black">{serverMessage}</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
