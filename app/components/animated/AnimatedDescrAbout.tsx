"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { type ChildProp } from "@/app/lib/definitions-type";
import { fadeIn } from "@/app/lib/variant";

const AnimatedDescrAbout: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.p
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
    >
      {children}
    </motion.p>
  );
};

export default AnimatedDescrAbout;
