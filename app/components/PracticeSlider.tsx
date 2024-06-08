"use client";

import { FC, useEffect } from "react";
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
const practiceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "I have been using Photoshop since 2010. Figma since 2022 ",
  },
  {
    icon: <RxDesktop />,
    title: "Frontend",
    description:
      "JavaScript since 2022. TypeScript since 2023. React since 2022. Next.js since 2024.",
  },
  {
    icon: <RxReader />,
    title: "Backend",
    description:
      "Node.js since 2022. SQL since 2024. MongoDB since 2022. PostgreSQL since 2024.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

register();

const PracticeSlider: FC = (): JSX.Element => {
  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");

    const swiperParams = {
      freeMode: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
      pagination: {
        clickable: true,
      },
      modules: [FreeMode, Pagination],
    };

    if (swiperEl) Object.assign(swiperEl, swiperParams);
    swiperEl?.initialize();
  }, []);

  return (
    <swiper-container class="h-[180px] sm:h-[220px]">
      {practiceData.map((item, index) => (
        <swiper-slide
          key={index}
          style={{ backgroundColor: "rgba(65, 47, 123, 0.15)" }}
        >
          <div className="h-max rounded-lg px-6 py-5 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-base sm:text-lg text-accent mb-3">
              {item.icon}
            </div>
            {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-base">{item.title}</div>
              <p className="text-sm lg:text-base">{item.description}</p>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default PracticeSlider;
