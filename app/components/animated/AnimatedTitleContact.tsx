"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";
import { ChildProp } from "@/app/lib/definitions-type";

const AnimatedTitleContact: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.h2
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 text-center mb-10"
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitleContact;
