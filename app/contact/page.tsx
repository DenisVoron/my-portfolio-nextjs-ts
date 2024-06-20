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
