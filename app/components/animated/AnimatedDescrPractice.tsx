"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";

const AnimatedDescrPractice: FC = (): JSX.Element => (
  <motion.p
    variants={fadeIn("up", 0.4)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="xl:mb-6 text-sm lg:text-base xl:text-2xl max-w-[540px] mx-auto lg:mx-0"
  >
    A little about my skills.
  </motion.p>
);

export default AnimatedDescrPractice;
