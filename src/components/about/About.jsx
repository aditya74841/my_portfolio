import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
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
              <small>1.7+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon mx-auto" />
              <h5>Code</h5>
              <small>100000+ lines</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon mx-auto" />
              <h5>Completed</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            {" "}
            Greetings, tech enthusiasts! 🚀 I'm a dynamic full stack developer
            on a mission to weave magic on the web! My captivating web apps come
            alive with HTML, CSS, JavaScript, React, and Next.js. With mastery
            in Python and Node.js, I create strong back-ends, managing
            databases, APIs, and deployment. But wait, there's more! 🌟📱 I'm
            also skilled in crafting mesmerizing native apps for iOS and Android
            using React Native! Let's join forces and create extraordinary
            digital experiences together! 💻💡📱.
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
