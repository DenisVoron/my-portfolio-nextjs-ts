"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { Pagination } from "swiper/modules";

// icons
import { BsArrowRight } from "react-icons/bs";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

register();

const WorkSlider: FC = (): JSX.Element => {
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
      {workSlides.slides.map((slide, index) => (
        <swiper-slide
          key={index}
          style={{ backgroundColor: "rgba(65, 47, 123, 0.15)" }}
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg md:rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* {image} */}
                  <Image
                    src={image.path}
                    width={380}
                    height={240}
                    alt="image work"
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title part one */}
                      <div className="delay-100">LIVE</div>
                      {/* title part two */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default WorkSlider;
