
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
import CategoryPage from "./components/category/CategoryPage";
import UpdatePage from "./components/update/UpdatePage";
import DailyUpdate from "./components/dailyUpdate/DailyUpdate";
import GitHubProfile from "./components/about/GithubProfile";
import LeetCodeProfile from "./components/about/LeetcodeProfile";
import ProjectsPage from "./components/projects/Projects";

// Import the NavbarProvider
import { NavbarProvider, useNavbar } from "./contexts/NavbarContext";
import Analytics from "./components/Ai/Analytics";
import useHealthCheck from "./hooks/useHealthCheck";

// Remove Nav from FullHome - let the parent handle it
const FullHome = () => (
  <>
    <Header />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
  </>
);

// Create a layout wrapper that includes conditional navbar
const Layout = ({ children }) => {
  const { hideNavbar } = useNavbar();
  
  return (
    <>
      {!hideNavbar && <Nav />}
      {children}
    </>
  );
};

// Create a wrapper component to use the navbar context
const AppContent = () => {
  // const { hideNavbar } = useNavbar();

  useHealthCheck("https://portfolio-server-8zb7.onrender.com/health-check");

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
          <Route path="/" element={<Layout><FullHome /></Layout>} />
          <Route path="/blog" element={<Layout><Main /></Layout>} />
          {/* <Route path="/cv" element={<Layout><Resume /></Layout>} /> */}
          <Route path="/ai" element={<AIChat />} />
          <Route path="/ai-analytics" element={<Analytics />} />
          <Route path="/category" element={<Layout><CategoryPage /></Layout>} />
          <Route path="/update" element={<Layout><UpdatePage /></Layout>} />
          <Route path="/daily-update" element={<Layout><DailyUpdate /></Layout>} />
          <Route path="/aditya-github" element={<Layout><GitHubProfile /></Layout>} />
          <Route path="/aditya-leetcode" element={<Layout><LeetCodeProfile /></Layout>} />
          {/* Remove Layout wrapper from projects route to hide navbar */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cv" element={<Resume />} />

        </Routes>
        <FloatingChat />
      </Router>
    </>
  );
};

const App = () => {
  return (
    <NavbarProvider>
      <AppContent />
    </NavbarProvider>
  );
};

export default App;
