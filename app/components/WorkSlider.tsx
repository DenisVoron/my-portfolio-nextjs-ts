"use client";

import { FC, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Pagination } from "swiper/modules";

// icons
import { BsArrowRight } from "react-icons/bs";
import { CgSpaceBetween } from "react-icons/cg";
import Image from "next/image";

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
                <div className="flex items-center justify-center relative overflow-hidden">
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
                  <div className="absolute">
                    <div>
                      {/* title part one */}
                      <div>title part 1</div>
                      {/* title part two */}
                      <div>title part 2</div>
                      {/* icon */}
                      <div>icon</div>
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

{
  /* <div className="h-max rounded-lg px-6 py-5 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
  <div className="text-base sm:text-lg text-accent mb-3">{item.icon}</div>
  {/* title & desc */
}
/*<div className="mb-8">
    <div className="mb-2 text-base">{item.title}</div>
    <p className="text-sm sm:text-base">{item.description}</p>
  </div>
  <div className="text-2xl">
    <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
  </div>
</div>; */
