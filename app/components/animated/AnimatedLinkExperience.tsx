"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedLinkExperience: FC<ChildProp> = ({ children }) => (
  <motion.div
    variants={fadeIn("left", 0.4)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="flex flex-col w-full xl:max-w-[48%] h-[310px]"
  >
    {children}
  </motion.div>
);

export default AnimatedLinkExperience;
