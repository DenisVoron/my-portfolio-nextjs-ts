"use client";

import { fadeIn } from "@/app/lib/variant";
import { type ChildProp } from "@/app/lib/definitions-type";
import { motion } from "framer-motion";
import { FC } from "react";

const AnimatedTitleAbout: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.h2
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2"
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitleAbout;
