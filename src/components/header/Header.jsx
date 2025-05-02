// import React from 'react'
// import './header.css'
// import CTA from './CTA'
// import HeaderSocials from './HeaderSocials'
// import ME from '../../assets/me.jpg'

// const Header = () => {
//   return (
//     <>

      
      // <header id='home'>
      //   <div className="container header__container">

      //     <h5 className=''>Hello I'm</h5>
      //     <h1 className=''>Aditya Ranjan</h1>
      //     <h5 className="text-light">Fullstack Web Developer</h5>
      //     <p className="">  With a Bachelor's Degree in Tech, experienced developer in
      //       creating web <br></br> sites and applying curret level of knowledge, or
      //       skills in producing quality work.</p>
      //     <CTA />
      //     <HeaderSocials />
      //     <div className="me">
      //       <img className='myimage' src={ME} alt="me" />
      //     </div>
      //     <a href="#contact" className='scroll__down'>Scroll Down</a>

      //   </div>
      // </header>
//     </>
//   )
// }

// export default Header;






import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.jpg';
import { Helmet } from 'react-helmet';

const Header = () => {
  return (
    <>
      <Helmet>
        <title>Aditya Ranjan | Full Stack Web Developer Portfolio</title>
        <meta
          name="description"
          content="I'm Aditya Ranjan, a Full Stack Web Developer skilled in the MERN stack. Explore my projects, experience, and services on my personal portfolio site."
        />
        <meta
          name="keywords"
          content="Aditya Ranjan, Full Stack Developer, MERN Developer, React Developer, Node.js, iamadityaranjan, Web Portfolio"
        />
        <meta name="author" content="Aditya Ranjan" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Aditya Ranjan | Full Stack Developer" />
        <meta
          property="og:description"
          content="Explore the work and skills of Aditya Ranjan, a MERN Stack Developer based in India."
        />
        <meta property="og:image" content="https://iamadityaranjan.com/me.jpg" />
        <meta property="og:url" content="https://iamadityaranjan.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aditya Ranjan | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Explore the portfolio and projects of Aditya Ranjan, Full Stack Web Developer (React, Node, MongoDB)."
        />
        <meta name="twitter:image" content="https://iamadityaranjan.com/me.jpg" />
      </Helmet>

      <header id='home'>
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
  );
};

export default Header;
