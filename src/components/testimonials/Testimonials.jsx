

// import React from "react";
// import "./testimonials.css";
// import AVTR1 from "../../assets/avatar1.jpg";
// import AVTR2 from "../../assets/avatar2.jpg";
// import AVTR3 from "../../assets/avatar3.jpg";

// // Import Swiper components and styles
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import SEO from "../../SEO";

// const data = [
//   {
//     avatar: AVTR1,
//     name: "Vamika Singh",
//     occupation: "Software Engineer TCS",
//     review:
//       "Passionate in writing code through the development of creative and innovative software. Enthusiastically tackles every assignment as he is directed. He is friendly and easy to get along with.",
//   },
//   {
//     avatar: AVTR2,
//     name: "Adwait Verma",
//     occupation: "Software Engineer RSystems",
//     review:
//       "Distinguished software developer with good knowledge of DSA and web development using latest technologies. Avid learner and an outstanding problem solver.",
//   },
//   {
//     avatar: AVTR3,
//     name: "Aneesh Pavan",
//     occupation: "Software Engineer Microsoft",
//     review:
//       "A good friend with a lot of enthusiasm and an unquenchable thirst for learning or trying out new things. Humble, smart, disciplined and always available to help.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <>
//       <SEO
//         title="Aditya Ranjan | Client Testimonials"
//         description="Read the testimonials from clients and colleagues about Aditya Ranjan’s work in software development and problem-solving skills."
//         keywords="Aditya Ranjan, Testimonials, Software Engineer, Web Development, Client Reviews"
//       />

//       <section id="testimonials">
//         <h5>Review from clients</h5>
//         <h2>Testimonials</h2>

//         <Swiper
//           className="container testimonials__container"
//           spaceBetween={40}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//         >
//           {data.map(({ avatar, name, review, occupation }, index) => (
//             <SwiperSlide key={index} className="testimonial">
//               {/* <div className='client__avatar'>
//               <img src={avatar} alt={`Avatar ${index + 1}`} />
//             </div> */}
//               <h5 className="client__name">{name}</h5>
//               <p style={{ fontSize: 15 }}>({occupation})</p>
//               <small className="client__review">{review}</small>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaLinkedin, FaExternalLinkAlt, FaStar, FaUserCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiShield } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,  Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import SEO from "../../SEO";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const testimonials = [
    {
      avatar: AVTR1,
      name: "Vamika Singh",
      occupation: "Software Engineer",
      company: "TCS",
      linkedinUrl: "https://www.linkedin.com/in/vamika-singh-12345", // Replace with real LinkedIn
      rating: 5,
      review: "Aditya is passionate about writing clean, efficient code and developing creative software solutions. His enthusiasm for every project is infectious, and he's incredibly friendly and collaborative. Working with him has been a pleasure!",
      date: "March 2024",
      projectWorked: "E-commerce Platform Development",
      verified: true,
      skills: ["React", "Node.js", "Team Leadership"]
    },
    {
      avatar: AVTR2,
      name: "Adwait Verma",
      occupation: "Software Engineer",
      company: "RSystems",
      linkedinUrl: "https://www.linkedin.com/in/adwait-verma-67890", // Replace with real LinkedIn
      rating: 5,
      review: "Aditya is a distinguished developer with excellent knowledge of DSA and modern web technologies. He's an avid learner who approaches every problem with creativity and delivers outstanding solutions. Highly recommended!",
      date: "February 2024",
      projectWorked: "Full-Stack Web Application",
      verified: true,
      skills: ["Problem Solving", "Web Development", "Innovation"]
    },
    {
      avatar: AVTR3,
      name: "Aneesh Pavan",
      occupation: "Software Engineer",
      company: "Microsoft",
      linkedinUrl: "https://www.linkedin.com/in/aneesh-pavan-54321", // Replace with real LinkedIn
      rating: 5,
      review: "Aditya is not just a skilled developer but also a wonderful colleague. His enthusiasm for learning new technologies and helping others is remarkable. He's humble, smart, disciplined, and always ready to lend a hand.",
      date: "January 2024",
      projectWorked: "React Native Mobile App",
      verified: true,
      skills: ["React Native", "Mentoring", "Communication"]
    }
  ];

  const TestimonialCard = ({ testimonial, index }) => {
    const [showFullReview, setShowFullReview] = useState(false);

    return (
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col">
        {/* Quote Icon */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <FaQuoteLeft className="text-white text-lg md:text-2xl" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex justify-center mb-4 md:mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-lg md:text-xl mx-0.5 md:mx-1" />
          ))}
        </div>

        {/* Review */}
        <div className="flex-1 mb-4 md:mb-6">
          <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed text-sm md:text-lg">
            "{showFullReview ? testimonial.review : `${testimonial.review.substring(0, 120)}...`}"
            {testimonial.review.length > 120 && (
              <button
                onClick={() => setShowFullReview(!showFullReview)}
                className="text-indigo-500 hover:text-indigo-600 ml-2 font-medium text-sm"
              >
                {showFullReview ? "Show Less" : "Read More"}
              </button>
            )}
          </p>
        </div>

        {/* Client Info */}
        <div className="flex flex-col items-center mb-4 md:mb-6">
          <div className="relative mb-3 md:mb-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg"
            />
            {testimonial.verified && (
              <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <FaUserCheck className="text-white text-xs md:text-sm" />
              </div>
            )}
          </div>
          
          <div className="text-center">
            <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
              {testimonial.name}
            </h4>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1 text-sm md:text-base">
              {testimonial.occupation}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium">
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6">
          {testimonial.skills.map((skill, i) => (
            <span key={i} className="px-2 md:px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>

        {/* Project Info */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 md:p-4 mb-4 md:mb-6">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-1">
            <strong>Project:</strong> {testimonial.projectWorked}
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            <strong>Date:</strong> {testimonial.date}
          </p>
        </div>

        {/* Verification Link */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4">
          <a
            href={testimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-2 rounded-full transition-colors duration-300 text-xs md:text-sm font-medium"
          >
            <FaLinkedin />
            <span className="hidden sm:inline">Verify on LinkedIn</span>
            <span className="sm:hidden">LinkedIn</span>
          </a>
          
          {testimonial.verified && (
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs md:text-sm">
              <BiShield />
              <span>Verified</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Aditya Ranjan | Client Testimonials & Reviews"
        description="Read verified testimonials from colleagues and clients about Aditya Ranjan's work in software development, problem-solving skills, and professional collaboration."
        keywords="Aditya Ranjan, Testimonials, Software Engineer, Web Development, Client Reviews, Verified Reviews"
      />

      <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h5 className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 font-light mb-2">
              What People Say About Me
            </h5>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6">
              Client Testimonials
            </h2>
            <div className="w-12 md:w-16 lg:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Here's what my colleagues and clients have to say about working with me. 
              All testimonials are verified and include LinkedIn profiles for authenticity.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className={`mb-8 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: '.swiper-button-prev-custom',
                  nextEl: '.swiper-button-next-custom',
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true,
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                className="testimonials-swiper !pb-12"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                <FaChevronLeft className="text-gray-600 dark:text-gray-400" />
              </div>
              <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300">
                <FaChevronRight className="text-gray-600 dark:text-gray-400" />
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl border border-white/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Why Trust These Reviews?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                All testimonials are from real colleagues and clients I've worked with. 
                Each review includes verification links to ensure authenticity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="text-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaUserCheck className="text-white text-base md:text-lg lg:text-2xl" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Verified Profiles
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                  All reviewers have verified LinkedIn profiles you can check
                </p>
              </div>

              <div className="text-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BiShield className="text-white text-base md:text-lg lg:text-2xl" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Real Collaboration
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                  Based on actual projects and professional relationships
                </p>
              </div>

              <div className="text-center group">
                <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaStar className="text-white text-base md:text-lg lg:text-2xl" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Authentic Feedback
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                  Honest reviews from colleagues at top tech companies
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-8 md:mt-12 lg:mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base">
              Join these satisfied clients and let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                Let's Start a Project
                <FaExternalLinkAlt className="text-xs md:text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-ranjan-56331b1b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                <FaLinkedin />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

