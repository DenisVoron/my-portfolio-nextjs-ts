import { FC } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaFigma,
  FaNode,
  FaSass,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiTsnode,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

import { ISearchParamsProp, UnitedDataTyp } from "../lib/definitions-type";
import Avatar from "../components/Avatar";
import Circles from "../components/Circles";
import AnimatedAvatarAbout from "../components/animated/AnimatedAvatarAbout";
import AboutNavLink from "../components/AboutNavLink";
import CountUp from "../components/CountUpComponent";
import AnimatedTitleAbout from "../components/animated/AnimatedTitleAbout";
import AnimatedDescrAbout from "../components/animated/AnimatedDescrAbout";
import AnimatedCountsAbout from "../components/animated/AnimatedCountsAbout";
import AnimatedLinkExperience from "../components/animated/AnimatedLinkExperience";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={"FaHtml5"} title="HTML5" />,
          <FaCss3 key={"FaCss3"} title="CSS" />,
          <FaSass key={"FaSass"} title="Sass" />,
          <FaJs key={"FaJs"} title="javaScript" />,
          <SiTypescript key={"SiTypescript"} title="TypeScript" />,
          <SiNextdotjs key={"SiNextdotjs"} title="NEXT.js" />,
          <FaReact key={"FaReact"} title="React" />,
          <FaVuejs key={"FaVuejs"} title="Vue.js" />,
          <SiTailwindcss key={"SiTailwindcss"} title="Tailwind-css" />,
          <SiFramer key={"SiFramer"} title="framer-motion" />,
        ],
      },
      {
        title: "Back End Development",
        icons: [
          <FaNode key={"FaNode"} title="Node.js" />,
          <SiTsnode key={"SiTsnode"} title="Node.ts" />,
          <SiMongodb key={"SiMongodb"} title="mongoDB" />,
          <SiPostgresql key={"SiPostgresql"} title="Postgresql" />,
          <PiFileSql key={"PiFileSql"} title="sql" />,
        ],
      },
      {
        title: "Design",
        icons: [
          <FaFigma key={"FaFigma"} />,
          <SiAdobephotoshop key={"SiAdobephotoshop"} />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full stack developer - GoIt",
        stage: "2022 - 2023",
      },
      {
        title: "Online store owner - EliteNail",
        stage: "2015 - Now",
      },
      {
        title: "Media buyer in advertising agency",
        stage: "2007 - 2014",
      },
    ],
  },
  {
    title: "study",
    info: [
      {
        title: "Fullstack developer courses - GoIt school",
        stage: "2022 - 2023",
      },
      {
        title: "National Transport University",
        stage: "2007 - 2011",
      },
    ],
  },
];

const About: FC<ISearchParamsProp> = ({ searchParams }): JSX.Element => {
  const index = Number(searchParams?.tab) || 0;

  return (
    <div className="h-full bg-primary/30 py-24 text-center xl:text-left">
      <Circles />
      <AnimatedAvatarAbout>
        <Avatar />
      </AnimatedAvatarAbout>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center sm:mt-1 lg:mt-0">
          <AnimatedTitleAbout>
            Do what <span className="text-accent"> you</span> love!
          </AnimatedTitleAbout>
          <AnimatedDescrAbout>
            Two years ago, my path in the field of IT - Full Stack developer
            began. <span className=" text-accent">Why exactly IT?</span> At one
            of the stages of my commercial life, an online store appeared. Over
            time, there was a desire to improve something, to replace something.
            Probably, it would have been easier to hire some specialist, but I
            wanted to figure out what was what.... I started to learn HTML and
            CSS on my own, I started to understand programming languages ​​and
            their frameworks. But today there are so many programming languages
            ​​that I was confused about which technology does what. The decision
            was to go to the courses in order to gain basic knowledge on the
            basis of which it will be easier to form your further technology
            stack. <span className="text-accent">Why javaScript?</span> In
            general, my desire was to understand how WEB works in general. After
            surfing a little on the Internet, found out that JS is not difficult
            for a beginner and a lot of products are created using this
            programming language. I liked JavaScript, but when I met React I
            fell in love with programming...
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
        <AnimatedLinkExperience>
          <div className="flex gap-x-1 xl:gap-x-8 mx-auto xl:mx-0 mb-5">
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
                    <div className="font-light text-sm md:text-base mb-2 md:mb-0">
                      {item.title}
                    </div>
                    <div className="hidden md:flex">-</div>
                    <div className="text-sm md:text-base">{item.stage}</div>
                  </div>
                );
              }
              if ("icons" in item) {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div className="font-light text-sm md:text-base mb-2 md:mb-0">
                      {item.title}
                    </div>
                    <div className="hidden md:flex">-</div>
                    <div className="flex gap-x-4">
                      {item.icons.map((icon, index) => (
                        <div
                          key={index}
                          className="text-base md:text-2xl text-white"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </AnimatedLinkExperience>
      </div>
    </div>
  );
};

export default About;
