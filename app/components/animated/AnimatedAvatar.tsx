"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { type ChildProp } from "../../lib/definitions-type";
import { fadeIn } from "../../lib/variant";

const AnimatedAvatar: FC<ChildProp> = ({ children }): JSX.Element => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedAvatar;
