import React from "react";
import "./experience.css";

import { BsPatchCheckFill } from "react-icons/bs";
import SEO from "../../SEO";

const Experience = () => {
  return (
    <>
      <SEO
        title="Aditya Ranjan | Experience"
        description="Explore the education and working experience of Aditya Ranjan, a Full Stack Web Developer with hands-on experience in various companies and roles."
        keywords="Aditya Ranjan, Full Stack Developer, Web Developer, Experience, CodenCreative, Black Water Coffee, Education"
      />
      <section id="experience">
        <h5>Experience</h5>
        <h2>My Present And Past</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Educaton</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className=" experience__details-icon" />
                <div>
                  <h4>Amritsar College of Engineering and Technology </h4>
                  <small className="text-light">
                    Bachelor in Technology – Computer Science and Engineering
                  </small>
                  <h4>(CGPA-7.4)</h4>
                </div>
              </article>
              <br />
              <br />
              <article className="experience__details">
                <BsPatchCheckFill className=" experience__details-icon" />
                <div>
                  <h4>Deochand College </h4>
                  <small className="text-light">12th Standard </small>
                  <h4>(Percentage-70%)</h4>
                </div>
              </article>
            </div>
          </div>

          {/* End of Frontend */}
          <div className="experience__backend">
            <h3>Working Experience</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className=" experience__details-icon" />
                <div>
                  <a
                    href="https://codencreative.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>CodenCreative</h4>
                  </a>

                  <p>Full Stack Developer</p>
                  <small className="text-light">Feb 2024 - present</small>
                </div>
              </article>

              <br />
              <br />
              <article className="experience__details">
                <BsPatchCheckFill className=" experience__details-icon" />
                <div>
                  <a
                    href="https://www.linkedin.com/company/black-water-coffee-company-limited/about/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>Black Water Coffee Pvt Ltd.</h4>
                  </a>

                  <p>Full Stack Developer</p>
                  <small className="text-light">Nov 2022-Jan 2024</small>
                </div>
              </article>
              <br />
              <br />
              <article className="experience__details">
                <BsPatchCheckFill className=" experience__details-icon" />
                <div>
                  <a
                    href="https://codencreative.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>CodenCreative</h4>
                  </a>

                  <p>Frontend Developer Intern</p>
                  <small className="text-light">July 2022-Sept 2022</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
