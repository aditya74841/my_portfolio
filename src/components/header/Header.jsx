import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.jpg'

const Header = () => {
  return (
    <>

      
      <header>
        <div className="container header__container">

          <h5 className=''>Hello I'm</h5>
          <h1 className=''>Aditya Ranjan</h1>
          <h5 className="text-light">Fullstack Web Developer</h5>
          <p className="">  With a Bachelor's Degree in Tech, experienced developer in
            creating web <br></br> sites and applying curret level of knowledge, or
            skills in producing quality work.</p>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img className='myimage' src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>

        </div>
      </header>
    </>
  )
}

export default Header;