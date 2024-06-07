"use client";

import { FC } from "react";
import { fadeIn } from "@/app/lib/variant";
import { motion } from "framer-motion";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedTitlePracticeAndWork: FC<ChildProp> = ({
  children,
}): JSX.Element => {
  return (
    <motion.h2
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="text-4xl xl:h2 mb-2 xl:mt-1"
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitlePracticeAndWork;
