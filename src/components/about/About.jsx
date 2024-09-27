import React from "react";
import "./about.css";
import CV from "../../assets/aditya_resume.pdf";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className=" container mx-auto">
        {/* <div className="about__me hidden">
          <div className="about__me-image">
            <img style={{}} src={ME} alt="About Image" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon mx-auto" />
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon mx-auto" />
              <h5>Code</h5>
              <small>10000+ lines</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon mx-auto" />
              <h5>Completed</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            {" "}
            Greetings, recruiters and tech professionals!👋 <br />I am a highly
            skilled and passionate full stack developer with extensive
            experience in building dynamic, high-performance web applications
            using cutting-edge technologies such as HTML, CSS, JavaScript,
            React, and Next.js. On the back-end, I harness the power of Python
            and Node.js to develop robust, scalable solutions, efficiently
            managing databases, RESTful APIs, and ensuring seamless deployment
            processes.
          </p>
          {/* <div style={{justifyContent:'space-between',alignItems:'center'}}> */}
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
          <a
            href={CV}
            download
            className="btn"
            style={{
              marginLeft: 10,
            }}
          >
            Download CV
          </a>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
