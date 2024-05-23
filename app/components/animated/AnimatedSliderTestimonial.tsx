"use client";

import { FC } from "react";
import { fadeIn } from "@/app/lib/variant";
import { motion } from "framer-motion";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedSliderTestimonial: FC<ChildProp> = ({
  children,
}): JSX.Element => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};
export default AnimatedSliderTestimonial;
