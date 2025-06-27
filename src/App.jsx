import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { Helmet } from "react-helmet";
import Main from "./components/blog/Main";
import Resume from "./components/resume/Resume";
import { Toaster } from "react-hot-toast";
import AIChat from "./components/Ai/AIChat";
import FloatingChat from "./components/Ai/FloatingChat";

const FullHome = () => (
  <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Helmet>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-79B88YP1GN"
          ></script>
          <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-79B88YP1GN');
          `}
          </script>
        </Helmet>

        <Routes>
          <Route path="/" element={<FullHome />} />
          <Route path="/blog" element={<Main />} />
          <Route path="/cv" element={<Resume />} />
          <Route path="/ai" element={<AIChat />} />
        </Routes>
        <FloatingChat />
      </Router>
    </>
  );
};

export default App;
