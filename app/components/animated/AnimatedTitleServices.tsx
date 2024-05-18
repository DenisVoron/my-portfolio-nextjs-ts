"use client";

import { FC } from "react";
import { fadeIn } from "@/app/lib/variant";
import { motion } from "framer-motion";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedTitleService: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.h2
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 xl:mt-8"
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitleService;
