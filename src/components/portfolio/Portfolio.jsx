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
import IMG7 from "../../assets/shortUrl.webp";
import IMG8 from "../../assets/special-app.webp"
import SEO from "../../SEO";

const PortfolioItem = ({ imgSrc, title, githubLink, liveDemoLink }) => (
  <article className="portfolio__item h-full ">
    <div className="portfolio__item-image bg-red-600 h-1/2">
      <img src={imgSrc} alt={title} className="" />
    </div>
    <div className="mt-16 h-1/2">
    
        <h3 className="h-1/4">{title}</h3>

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
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              className=" btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
     
    </div>
  </article>
);




const ProjectCard = ({ imgSrc, title, githubLink, liveDemoLink })=>(
  <div className="card bg-base-100 w-96 shadow-sm p-4 bg-red-600">
  <figure>
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" /> */}
      <img src={imgSrc} alt={title} className="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
)




const Portfolio = () => {
  return (
    <>
      <SEO
        title="Aditya Ranjan | Web Development Portfolio"
        description="Explore the web development projects of Aditya Ranjan, including E-commerce platforms, Google Keep clone, To-Do apps, and more."
        keywords="Aditya Ranjan, Portfolio, Web Development, React Projects, Full Stack, E-commerce, Clones, React, Node.js"
      />
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          
          <PortfolioItem
            imgSrc={IMG7}
            title="Url Shortner"
            githubLink="https://github.com/aditya74841/Url_Shortner"
            liveDemoLink="https://p1.iamadityaranjan.com/"
          />
          <PortfolioItem
            imgSrc={IMG1}
            title="Cura - Lifestyle E-commerce Platform Frontend"
            githubLink="https://github.com/aditya74841/Ecommerce_Frontend.github.io"
            liveDemoLink="https://p2.iamadityaranjan.com/"
            // className="w-full"
          />

          <PortfolioItem
            imgSrc={IMG2}
            title="Google Keep Clone with Delete and Archive Features"
            githubLink="https://github.com/aditya74841/React_TODO_frontend"
            liveDemoLink="https://p3.iamadityaranjan.com/"
          />
          <PortfolioItem
            imgSrc={IMG5}
            title="Music Portfolio"
            githubLink="https://github.com/aditya74841/music_portfolio"
            liveDemoLink="https://p4.iamadityaranjan.com/"
          />
          <PortfolioItem
            imgSrc={IMG3}
            title="To-Do App with Authentication (Login/Logout)"
            githubLink="https://github.com"
            liveDemoLink="https://p5.iamadityaranjan.com/login"
          />

          <PortfolioItem
            imgSrc={IMG4}
            title="Inshorts Clone"
            githubLink="https://github.com/aditya74841/"
            // liveDemoLink="https://github.com/aditya74841/"
          />

          <PortfolioItem
            imgSrc={IMG6}
            title="WhatsApp Clone"
            githubLink="https://github.com/aditya74841/whatsapp-Clone"
            // liveDemoLink="https://github.com/aditya74841/"
          />
            <PortfolioItem
            imgSrc={IMG8}
            title="Aspecial App"
            githubLink="https://github.com/aditya74841/Quote-Backend"
            liveDemoLink="https://quote-backend-xqfm.onrender.com/api-docs/"
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
