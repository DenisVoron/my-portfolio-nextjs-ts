"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedTitleAbout: FC<ChildProp> = ({ children }): JSX.Element => (
    <motion.h2
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="text-2xl mb-1 md:mb-3 xl:h2"
    >
      {children}
    </motion.h2>
);

export default AnimatedTitleAbout;
