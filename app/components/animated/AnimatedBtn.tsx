"use client";

import { FC } from "react";
import { type ChildProp } from "../../lib/definitions-type";
import { fadeIn } from "../../lib/variant";
import { motion } from "framer-motion";

const AnimatedBtn: FC<ChildProp> = ({ children }): JSX.Element => {
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
