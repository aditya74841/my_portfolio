// import React from 'react'
// import './portfolio.css'
// import IMG1 from '../../assets/Ecommerce_Frontend.png'
// import IMG2 from '../../assets/google_keep.jpg'
// import IMG3 from '../../assets/to-do.png'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

// const Portfolio = () => {
//     return (
//         <section id='portfolio'>
//             <h5>My Recent Work</h5>
//             <h2>Portfolio</h2>
//             <div className='container portfolio__container'>
//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG1} alt="" />
//                     </div>
//                     <h3> <span style={{color:'lightgreen', fontSize:25}}>Cura</span>  it's a lifestyle e commerce platform frontend</h3>
//                     <div className="portfolio__item-cta">
//                         <a href="https://github.com/aditya74841/Ecommerce_Frontend.github.io" className='btn' target='_blank' rel="noreferrer">GitHub</a>
//                         <a href="https://shopavi.netlify.app/index.html" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
//                     </div>

//                 </article>
//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG2} alt="" />
//                     </div>
//                     <h3>It's a clone of <span style={{color:'lightgreen', fontSize:25}} >Google keep</span> with Delete and Archive features</h3>
//                     <div className="portfolio__item-cta">
//                         <a href="https://github.com/aditya74841/React_TODO_frontend" className='btn' target='_blank' rel="noreferrer">GitHub</a>
//                         <a href="https://takenotesss.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
//                     </div>

//                 </article>

//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG3} alt="" />
//                     </div>
//                     <h3>This is <span style={{color:'lightgreen', fontSize:25}}>To do App</span> with Authentication like Login Logout</h3>
//                     <div className="portfolio__item-cta">
//                         <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
//                         <a href="https://react-todo-frontend-silk.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
//                     </div>

//                 </article>

//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG4} alt="" />
//                     </div>
//                     <h3>This is portfolio item title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
//                         <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer" > Live Demo</a>
//                     </div>

//                 </article>

//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG5} alt="" />
//                     </div>
//                     <h3>This is portfolio item title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
//                         <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
//                     </div>

//                 </article>

//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG6} alt="" />
//                     </div>
//                     <h3>This is portfolio item title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
//                         <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
//                     </div>

//                 </article>

//             </div>
//         </section>
//     )
// }

// export default Portfolio

import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/Ecommerce_Frontend.png";
import IMG2 from "../../assets/google_keep.jpg";
import IMG3 from "../../assets/to-do.png";
import IMG4 from "../../assets/inshorts.png";
import IMG5 from "../../assets/takememories.jpg";
import IMG6 from "../../assets/whatsapp.png";

const PortfolioItem = ({ imgSrc, title, githubLink, liveDemoLink }) => (
  <article className="portfolio__item w-full h-full">
    <div className="portfolio__item-image w-full h-4/6">
      <img src={imgSrc} alt={title} className="w-full h-full" />
    </div>
    <div className="mt-12">
      <h3 className="mt-auto">{title}</h3>

      <div className="portfolio__item-cta ">
        <a
          href={githubLink}
          className="btn"
          target="_blank"
          rel="noreferrer"
          style={{}}
        >
          GitHub
        </a>
        <a
          href={liveDemoLink}
          className=" btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  </article>
);

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <PortfolioItem
          imgSrc={IMG1}
          title="Cura - Lifestyle E-commerce Platform Frontend"
          githubLink="https://github.com/aditya74841/Ecommerce_Frontend.github.io"
          liveDemoLink="https://shopavi.netlify.app/index.html"
          className="w-full"
        />

        <PortfolioItem
          imgSrc={IMG2}
          title="Google Keep Clone with Delete and Archive Features"
          githubLink="https://github.com/aditya74841/React_TODO_frontend"
          liveDemoLink="https://keeep.netlify.app/"
        />

        <PortfolioItem
          imgSrc={IMG3}
          title="To-Do App with Authentication (Login/Logout)"
          githubLink="https://github.com"
          liveDemoLink="https://react-todo-frontend-silk.vercel.app/"
        />

        <PortfolioItem
          imgSrc={IMG4}
          title="Inshorts Clone"
          githubLink="https://github.com/aditya74841/"
          // liveDemoLink="https://github.com/aditya74841/"
        />

        <PortfolioItem
          imgSrc={IMG5}
          title="Take Memories"
          githubLink="https://github.com/aditya74841/"
          // liveDemoLink="https://github.com/aditya74841/"
        />

        <PortfolioItem
          imgSrc={IMG6}
          title="WhatsApp Clone"
          githubLink="https://github.com/aditya74841/"
          // liveDemoLink="https://github.com/aditya74841/"
        />
      </div>
    </section>
  );
};

export default Portfolio;
