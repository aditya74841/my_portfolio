import React from "react";
import "./services.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Languages/Tools</h3>
          </div>
          <ul className="service__list">
            <li>
              {/* <BsPatchCheckFill className=' experience__details-icon' /> */}
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>C</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>C++</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Python</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Git</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Github</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>PostMan</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Frontend </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>HTML</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>CSS</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Reactjs</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>BootStrap</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Nextjs</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>React Native</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Typescript</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Nodejs</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>ExpressJs</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>MongoDB</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Sql</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Django</p>
            </li>
            <li>
              <BsPatchCheckFill className=" experience__details-icon" />
              <p>Typescript</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
