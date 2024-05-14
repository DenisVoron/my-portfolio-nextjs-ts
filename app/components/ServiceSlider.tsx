import { FC } from "react";
import Swiper from "swiper";
import "swiper/css/bundle";
// import { Swiper, SwiperSlide } from "swiper/react";

// // import swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// // import { FreeMode, Pagination } from "swiper";
// import Pagination from "swiper";
// import FreeMode from "swiper";
import { register } from "swiper/element/bundle";
import { FreeMode, Pagination } from "swiper/modules";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

register();

// const swiper = new Swiper(".swiper", {
//   freeMode: true,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 15,
//     },
//     640: {
//       slidesPerView: 3,
//       spaceBetween: 15,
//     },
//   },
//   pagination: {
//     clickable: true,
//   },
//   modules: [FreeMode, Pagination],
// });

const ServiceSlider: FC = (): JSX.Element => {
  return (
    <div className="swiper">
      <swiper-container
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, index) => (
          <swiper-slide key={index}>
            <div className=" bg-[rgba(65,47,123, 0.15)] h-max rounded-lg">
              <div>{item.icon}</div>
              {/* title & desc */}
              <div>
                <div>{item.title}</div>
                <p>{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight />
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default ServiceSlider;

{
  /* <swiper-slide>Service Slider</swiper-slide>
      <swiper-slide>Service Slider1</swiper-slide>
      <swiper-slide>Service Slider2</swiper-slide>
      <swiper-slide>Service Slider3</swiper-slide> */
}
// slides-per-view="1"
//       space-between="15"
//       speed="500"
//       loop="true"
//       css-mode="true"
