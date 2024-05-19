"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";
import { type ChildProp } from "@/app/lib/definitions-type";

const AnimatedSliderServicesAndWork: FC<ChildProp> = ({
  children,
}): JSX.Element => {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="w-full xl:max-w-[65%]"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSliderServicesAndWork;
