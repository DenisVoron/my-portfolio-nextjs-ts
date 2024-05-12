import React, { FC } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import { ISearchParamsProp, UnitedDataTyp } from "../lib/definitions-typ";
import Avatar from "../components/Avatar";
import Circles from "../components/Circles";
import AnimatedAvatarAbout from "../components/animated/AnimatedAvatarAbout";
import AboutNavLink from "../components/AboutNavLink";
import CountUp from "../components/CountUpComponent";
import AnimatedTitleAbout from "../components/animated/AnimatedTitleAbout";
import AnimatedDescrAbout from "../components/animated/AnimatedDescrAbout";
import AnimatedCountsAbout from "../components/animated/AnimatedCountsAbout";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={"FaHtml5"} />,
          <FaCss3 key={"FaCss3"} />,
          <FaJs key={"FaJs"} />,
          <FaReact key={"FaReact"} />,
          <SiNextdotjs key={"SiNextdotjs"} />,
          <SiFramer key={"SiFramer"} />,
          <FaWordpress key={"FaWordpress"} />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key={"FaFigma"} />,
          <SiAdobexd key={"SiAdobexd"} />,
          <SiAdobephotoshop key={"SiAdobephotoshop"} />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About: FC<ISearchParamsProp> = ({ searchParams }): JSX.Element => {
  const index = Number(searchParams?.tab) || 0;

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <AnimatedAvatarAbout>
        <Avatar />
      </AnimatedAvatarAbout>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <AnimatedTitleAbout>
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </AnimatedTitleAbout>
          <AnimatedDescrAbout>
            10 years ago, I began freelancing as a developer. Since then, I`ve
            done remote work for agencies, counsulted for startaps, and
            collaborated on digital products for business and consumer use.
          </AnimatedDescrAbout>
          <AnimatedCountsAbout>
            <div className=" flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={99} duration={3} /> %
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied users experience
                </div>
              </div>
            </div>
          </AnimatedCountsAbout>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[310px]">
          <div className="flex gap-x-1 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, index) => (
              <AboutNavLink key={item.title} title={item.title} index={index} />
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item: UnitedDataTyp, itemIndex) => {
              if ("stage" in item) {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                  </div>
                );
              }
              if ("icons" in item) {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div>{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div className="flex gap-x-4">
                      {item.icons.map((icon, index) => (
                        <div key={index} className="text-2xl text-white">
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
