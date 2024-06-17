"use client";

import { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { Pagination } from "swiper/modules";

// icons
import { BsArrowRight } from "react-icons/bs";
//type
import type { ImageObj, ImagesArr, SlidesTypes } from "../lib/definitions-type";

// data
const workSlides: SlidesTypes = {
  slides: [
    {
      images: [
        {
          title: "Powered by HTML, CSS",
          path: "/thumb1.jpg",
          link: "https://denisvoron.github.io/icecream-project/",
        },
        {
          title: "Powered by JS and libraries",
          path: "/thumb2.jpg",
          link: "https://denisvoron.github.io/filmoteka-project/",
        },
        {
          title: "Powered by Node.js, React",
          path: "/thumb3.jpg",
          link: "https://github.com/DenisVoron/backend-pets-project",
        },
        {
          title: "Powered by React, libraries",
          path: "/thumb4.jpg",
          link: "https://denisvoron.github.io/kids-contact-book",
        },
      ],
    },
    {
      images: [
        {
          title: "Powered by React, libraries",
          path: "/thumb4.jpg",
          link: "https://denisvoron.github.io/kids-contact-book",
        },
        {
          title: "Powered by HTML, CSS",
          path: "/thumb1.jpg",
          link: "https://denisvoron.github.io/icecream-project/",
        },
        {
          title: "Powered by JS and libraries",
          path: "/thumb2.jpg",
          link: "https://denisvoron.github.io/filmoteka-project/",
        },
        {
          title: "Powered by Node.js, React",
          path: "/thumb3.jpg",
          link: "https://github.com/DenisVoron/backend-pets-project",
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
    <swiper-container class="sm:w-[560px] sm:h-[320px] md:h-[330px] lg:w-[550px] lg:h-[325px] xl:w-[740px] xl:h-[430px] xl:mt-24">
      {workSlides.slides.map((slide: ImagesArr, index: number) => (
        <swiper-slide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image: ImageObj, index: number) => (
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
                    className="w-auto h-auto"
                    priority={true}
                  />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <Link href={image.link} target="_blank">
                        {/* title part one */}
                        <div className="delay-100">{image.title}</div>
                        {/* title part two */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          LIVE PROJECT
                        </div>
                        {/* icon */}
                        <div className=" text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </Link>
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
