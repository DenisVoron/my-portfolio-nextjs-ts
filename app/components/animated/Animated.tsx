"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChildProp } from "../../lib/definitions-typ";
import Transition from "../Transition";

const Animated: FC<ChildProp> = ({ children }): JSX.Element => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animated;
