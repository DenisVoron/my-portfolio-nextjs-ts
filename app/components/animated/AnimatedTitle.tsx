"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variant";
import { type ChildProp } from "../../lib/definitions-type";

const AnimatedTitle: FC<ChildProp> = ({ children }): JSX.Element => (
    <motion.h1
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="text-2xl my-5 md:text-4xl"
    >
      {children}
    </motion.h1>
);

export default AnimatedTitle;
