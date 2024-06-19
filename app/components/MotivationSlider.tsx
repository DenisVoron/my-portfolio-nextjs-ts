"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { Navigation, Pagination } from "swiper/modules";

// icons
import { FaQuoteLeft } from "react-icons/fa";

//type
import { MotivationDataTypes } from "../lib/definitions-type";

// motivation data
const motivationData: MotivationDataTypes[] = [
  {
    image: "/t-avt-1.png",
    name: "Satya Nadella",
    position: "Сhief director Microsoft",
    message:
      "For me, the most important thing is the role of technology, its connection with human capital and human potential. Technology makes it possible to do great things. You have to be optimistic about what technology can do in human hands.",
  },
  {
    image: "/t-avt-2.png",
    name: "Stephen Gary Wozniak",
    position: "Co-founder of Apple.",
    message: "Never trust a computer you can't throw out the window",
  },
  {
    image: "/t-avt-3.png",
    name: "Thomas Alva Edison",
    position: "American scientist and inventor",
    message:
      "Just because something doesn't work the way you planned doesn't mean it's useless",
  },
];

register();

const MotivationSlider: FC = (): JSX.Element => {
  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");

    const swiperParams = {
      navigation: true,
      pagination: {
        clickable: true,
      },
      modules: [Navigation, Pagination],
    };

    if (swiperEl) Object.assign(swiperEl, swiperParams);
    swiperEl?.initialize();
  }, []);

  return (
    <swiper-container class="h-[335px] sm:h-[220px] lg:h-[320px]">
      {motivationData.map((person: MotivationDataTypes, index: number) => (
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
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
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
                <div className="text-xs md:text-base xl:text-lg text-center md:text-left">
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

export default MotivationSlider;
