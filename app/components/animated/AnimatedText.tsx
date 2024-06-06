"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variant";
import { type ChildProp } from "../../lib/definitions-type";

const AnimatedText: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.p
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="text-base md:text-lg max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-16"
    >
      {children}
    </motion.p>
  );
};

export default AnimatedText;
