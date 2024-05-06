import { motion } from "framer-motion";
import { fadeIn } from "../lib/variant";

const AnimatedText = ({ children }) => {
  return (
    <motion.p
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
    ></motion.p>
  );
};

export default AnimatedText;
