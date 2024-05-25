"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { type ChildProp } from "@/app/lib/definitions-type";
import Transition from "../Transition";

const Animated: FC<ChildProp> = ({ children }): JSX.Element => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.div key={pathname} className="h-full">
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animated;
