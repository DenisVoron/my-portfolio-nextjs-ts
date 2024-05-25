"use client";

import { FC } from "react";
import { fadeIn } from "@/app/lib/variant";
import { motion } from "framer-motion";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedTitleServiceAndWork: FC<ChildProp> = ({
  children,
}): JSX.Element => {
  return (
    <motion.h2
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 text-xl xl:text-lg xl:mt-12"
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitleServiceAndWork;
