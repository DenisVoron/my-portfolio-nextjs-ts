"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { Pagination } from "swiper/modules";

// icons
import { FaQuoteLeft } from "react-icons/fa";

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
        <swiper-slide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={70}
                    height={70}
                    alt="avatar person"
                  />
                </div>
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px]">{person.position}</div>
              </div>
            </div>
            <div>
              {/* quote and message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default TestimonialSlider;
