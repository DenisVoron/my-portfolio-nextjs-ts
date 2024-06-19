import { FC } from "react";

import Circles from "../components/Circles";
import ContactForm from "../components/ContactForm";
import AnimatedTitleContact from "../components/animated/AnimatedTitleContact";
import AnimatedFormContact from "../components/animated/AnimatedFormContact";

const Contact: FC = (): JSX.Element => {
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form*/}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <AnimatedTitleContact>
            Let`s <span className="text-accent">connect.</span>
          </AnimatedTitleContact>
          {/* form */}
          <AnimatedFormContact>
            <ContactForm />
          </AnimatedFormContact>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="md:flex md:gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input h-12 md:h-14 mb-5 md:mb-0"
              />
              <input
                type="text"
                placeholder="email"
                className="input h-12 md:h-14"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input h-12 md:h-14"
            />
            <textarea placeholder="message" className="textarea"></textarea>
            <button
              type="button"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let`s talk
              </span>
              <BsArrowRight className=" -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button> */
}
