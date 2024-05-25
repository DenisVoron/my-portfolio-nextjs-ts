"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedTitleAbout: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.h2
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 text-2xl"
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitleAbout;
