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

import { ISearchParamsProp } from "../lib/definitions-typ";
import Avatar from "../components/Avatar";
import Circles from "../components/Circles";
import AnimatedAvatarAbout from "../components/AnimatedAvatarAbout";
import AboutNavLink from "../components/AboutNavLink";

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
        <div>Text</div>
        <div>
          <div className="flex gap-x-2 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, index) => (
              <AboutNavLink key={item.title} title={item.title} index={index} />
            ))}
          </div>
          <div>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}>
                  <div>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// ${
//                   // index === itemIndex && ""
//                 }

{
  /* <div
  key={itemIndex}
  className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
>
  {item.title}
</div>; */
}
