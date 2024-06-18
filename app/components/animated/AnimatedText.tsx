"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variant";

const AnimatedText: FC = (): JSX.Element => {
  return (
    <motion.p
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="text-base md:text-lg max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-16"
    >
      The Internet has been made so well that many people think of it as a
      natural resource like the Pacific Ocean, rather than something man-made.
      When was the last time a technology of this scale worked flawlessly? The
      web is a joke compared to that. The web was made by amateurs.
    </motion.p>
  );
};

export default AnimatedText;
