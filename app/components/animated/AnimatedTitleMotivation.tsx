"use client";

import { FC } from "react";
import { fadeIn } from "@/app/lib/variant";
import { motion } from "framer-motion";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedTitleMotivation: FC<ChildProp> = ({ children }): JSX.Element => (
  <motion.h2
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="h2 mb-8 xl:mb-0"
  >
    {children}
  </motion.h2>
);

export default AnimatedTitleMotivation;
