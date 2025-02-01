import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import { FaSquareXTwitter } from "react-icons/fa6";


// eslint-disable-next-line

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/aditya-ranjan-56331b1b7/" target="_blank" rel="noreferrer"> <BsLinkedin /></a>
            <a href="https://github.com/aditya74841" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
            <a href="https://x.com/adixranjan08" target="_blank" rel="noreferrer"><FaSquareXTwitter /></a>

        </div>
    )
}

export default HeaderSocials