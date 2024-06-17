"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variant";

const AnimatedDescrPracticeAndWork: FC = (): JSX.Element => (
  <motion.p
    variants={fadeIn("up", 0.4)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="xl:mb-6 text-sm lg:text-base xl:text-2xl max-w-[540px] mx-auto lg:mx-0"
  >
    These projects were created as a team. I`m participated in each of them as a
    developer. Responsibilities included work on tasks, cooperation with
    testers, discussions with the team on urgent issues, cooperation with other
    developers in joint tasks. The obtained commercial experience gives a full
    understanding of interaction in team cooperation.
  </motion.p>
);

export default AnimatedDescrPracticeAndWork;
