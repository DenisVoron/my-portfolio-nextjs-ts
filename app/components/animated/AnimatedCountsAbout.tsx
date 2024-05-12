"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ChildProp } from "@/app/lib/definitions-typ";
import { fadeIn } from "@/app/lib/variant";

const AnimatedCountsAbout: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.div
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCountsAbout;
