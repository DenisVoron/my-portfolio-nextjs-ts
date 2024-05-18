"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedDescrServices: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.p
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="mb-4 max-w-[400px] mx-auto lg:mx-0"
    >
      {children}
    </motion.p>
  );
};

export default AnimatedDescrServices;
