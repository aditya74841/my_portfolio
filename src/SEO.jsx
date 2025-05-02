import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Aditya Ranjan | Full Stack Web Developer",
  description = "I'm Aditya Ranjan, a MERN Stack Developer. Explore my work, skills, and projects.",
  keywords = "Aditya Ranjan, Full Stack Developer, MERN, React Developer, iamadityaranjan, Portfolio",
  image = "https://iamadityaranjan.com/me.jpg",
  url = "https://iamadityaranjan.com",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aditya Ranjan" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
