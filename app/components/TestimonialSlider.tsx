"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { Pagination } from "swiper/modules";

// icons
import { BsArrowRight } from "react-icons/bs";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

register();

const TestimonialSlider: FC = (): JSX.Element => {
  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");

    const swiperParams = {
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      modules: [Pagination],
    };

    if (swiperEl) Object.assign(swiperEl, swiperParams);
    swiperEl?.initialize();
  }, []);

  return (
    <swiper-container class="h-[180px] sm:h-[290px] lg:h-[440px]">
      {testimonialData.map((person, index) => (
        <swiper-slide
          key={index}
          style={{ backgroundColor: "rgba(65, 47, 123, 0.15)" }}
        >
          <div>
            {/* avatar, name, position */}
            <div>
              <div>
                {/* avatar */}
                <div>avatar</div>
                {/* name */}
                <div>Name</div>
                {/* position */}
                <div>Position</div>
              </div>
            </div>
            <div>
              {/* quote and message */}
              <div>quote and message</div>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default TestimonialSlider;
