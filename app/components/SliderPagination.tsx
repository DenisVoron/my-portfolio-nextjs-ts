"use client";

import { useRef, useEffect } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import { FreeMode, Pagination } from "swiper/modules";
register();

// const SliderPagination = () => {
//   const swiperts = new Swiper(".swiper-container", {
//     freeMode: true,
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 15,
//       },
//       640: {
//         slidesPerView: 3,
//         spaceBetween: 15,
//       },
//     },
//     pagination: {
//       clickable: true,
//     },
//     modules: [FreeMode, Pagination],
//   });

//   return (
//     <swiper-container
//       slides-per-view="4"
//       speed="500"
//       loop="true"
//       css-mode="true"
//     >
//       <swiper-slide>Slide 1</swiper-slide>
//       <swiper-slide>Slide 2</swiper-slide>
//       <swiper-slide>Slide 3</swiper-slide>
//       <swiper-slide>Slide 4</swiper-slide>
//     </swiper-container>
//   );
// };

// export default SliderPagination;
