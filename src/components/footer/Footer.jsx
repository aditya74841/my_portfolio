import React from 'react'
import './footer.css'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo'>Aditya Ranjan</a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>

            <div className="footer__socials">
                <a href="https://github.com/aditya74841"> <FaGithub  /> </a>
                <a href="https://www.instagram.com/aditya___ranjan_/"> <FiInstagram /> </a>
                <a href="https://www.linkedin.com/in/aditya-ranjan-56331b1b7/"> <FaLinkedin /> </a>

            </div>
            <div className="footer__copyright">
                <small>&copy; Aditya Ranjan.All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer