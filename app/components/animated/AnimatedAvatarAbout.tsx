"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { type ChildProp } from "../../lib/definitions-type";
import { fadeIn } from "../../lib/variant";

const AnimatedAvatarAbout: FC<ChildProp> = ({ children }): JSX.Element => (
  <motion.div
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="hidden xl:flex absolute bottom-0 -left-[370px]"
  >
    {children}
  </motion.div>
);

export default AnimatedAvatarAbout;
