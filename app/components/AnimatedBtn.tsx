"use client";

import { FC } from "react";
import { childProp } from "../lib/definitions-typ";
import { fadeIn } from "../lib/variant";
import { motion } from "framer-motion";

const AnimatedBtn: FC<childProp> = ({ children }): JSX.Element => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex"
    >
      {children}
    </motion.div>
  );
};
export default AnimatedBtn;
