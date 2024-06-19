"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";
import { ChildProp } from "@/app/lib/definitions-type";

const AnimatedFormContact: FC<ChildProp> = ({ children }): JSX.Element => (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex-1 flex flex-col gap-3 w-full mx-auto"
    >
      {children}
    </motion.div>
);

export default AnimatedFormContact;
