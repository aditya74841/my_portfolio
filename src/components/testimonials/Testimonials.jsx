// import React from 'react'
// import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// // import AVTR4 from '../../assets/avatar4.jpg'

// // import Swiper core and required modules
// import {  Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// const data = [
//   {
//     avatar: AVTR1,
//     name: 'Vamika Singh',
//     review: 'Passionate in writing code through the development of creative and innovative software. Enthusiastically tackles every assignment as he is directed. He is friendly and easy to get along with.'
//   },
//   {
//     avatar: AVTR2,
//     name: 'Adwait Verma',
//     review: 'Distinguished software developer with good knowledge of DSA and web development using latest technologies. Avid learner and an outstanding problem solver'
//   },
//   {
//     avatar: AVTR3,
//     name: 'Aneesh Pavan',
//     review: 'A good friend with a lot of enthusiasm and an unquenchable thirst for learning or trying out new things. Humble, smart, disciplined and always available to help.'
//   },
//   // {
//   //   avatar: AVTR4,
//   //   name: 'Aditya Ranjan',
//   //   review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quis dolores maxime facere, libero excepturi sit, pariatur non laudantium eaque assumenda vel eos asperiores. Voluptas suscipit sit nihil earum quos.'
//   // },
// ]
// const Testimonials = () => {
//   return (
//     <section id='testimonials'>
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper className='container testimonials__container'
//         modules={[ Pagination]}
//         spaceBetween={40}
//         slidesPerView={1}
     
//         pagination={{ clickable: true }}
//         >
//         {
//           data.map(({ avatar, name, review }, index) => {
//             return (
//               <SwiperSlide key={index} className='testimonial'>
//                 <div className="client__avatar">
//                   <img src={avatar} alt="Avatar 1" />
//                 </div>
//                 <h5 className='client__name'>{name}</h5>
//                 <p style={{fontSize:15}}>(Lorem ipsum meto)</p>
//                 <small className='client__review'>{review}</small>

//               </SwiperSlide>

//             )
//           })
//         }




//       </Swiper>
//     </section>
//   )
// }

// export default Testimonials


import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Vamika Singh',
    occupation:'Software Engineer TCS',
    review:
      'Passionate in writing code through the development of creative and innovative software. Enthusiastically tackles every assignment as he is directed. He is friendly and easy to get along with.',
  },
  {
    avatar: AVTR2,
    name: 'Adwait Verma',
    occupation:'Software Engineer RSystems',
    review:
      'Distinguished software developer with good knowledge of DSA and web development using latest technologies. Avid learner and an outstanding problem solver.',
  },
  {
    avatar: AVTR3,
    name: 'Aneesh Pavan',
    occupation:'Software Engineer Microsoft',
    review:
      'A good friend with a lot of enthusiasm and an unquenchable thirst for learning or trying out new things. Humble, smart, disciplined and always available to help.',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review ,occupation}, index) => (
          <SwiperSlide key={index} className='testimonial'>
            {/* <div className='client__avatar'>
              <img src={avatar} alt={`Avatar ${index + 1}`} />
            </div> */}
            <h5 className='client__name'>{name}</h5>
            <p style={{ fontSize: 15 }}>({occupation})</p>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
