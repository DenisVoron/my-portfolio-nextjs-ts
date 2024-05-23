import { FC } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../lib/variant";
import Circles from "../components/Circles";

const Contact: FC = (): JSX.Element => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form*/}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-12">
            Let`s <span className="text-accent">connect.</span>
          </h2>
          {/* form */}
          <form>
            <div className="md:flex md:gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input mb-5 md:mb-0"
              />
              <input type="text" placeholder="email" className="input" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
