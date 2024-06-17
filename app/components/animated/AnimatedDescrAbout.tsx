"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";

const AnimatedDescrAbout: FC = (): JSX.Element => {
  return (
    <motion.p
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="overflow-auto h-[250px] md:h-auto max-w-[500px] md:max-w-[600px] mx-auto xl:mx-0 mb-4 xl:mb-12 px-2 xl:px-0 text-[13px] md:text-xs lg:text-base"
    >
      Two years ago, my path in the field of IT - Full Stack developer began.{" "}
      <span className=" text-accent">Why exactly IT?</span> At one of the stages
      of my commercial life, an online store appeared. Over time, there was a
      desire to improve something, to replace something. Probably, it would have
      been easier to hire some specialist, but I wanted to figure out what was
      what.... I started to learn HTML and CSS on my own, I started to
      understand programming languages ​​and their frameworks. But today there
      are so many programming languages ​​that I was confused about which
      technology does what. The decision was to go to the courses in order to
      gain basic knowledge on the basis of which it will be easier to form your
      further technology stack.{" "}
      <span className="text-accent">Why javaScript?</span> In general, my desire
      was to understand how WEB works in general. After surfing a little on the
      Internet, found out that JS is not difficult for a beginner and a lot of
      products are created using this programming language. I liked JavaScript,
      but when I met React I fell in love with programming...
    </motion.p>
  );
};

export default AnimatedDescrAbout;
