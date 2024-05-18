import { FC } from "react";
import WorkSlider from "@/app/components/WorkSlider";
import Bulb from "@/app/components/Bulb";
import Circles from "@/app/components/Circles";
import AnimatedTitleService from "../components/animated/AnimatedTitleServices";
import AnimatedDescrServices from "../components/animated/AnimatedDescrServices";
import AnimatedServiceSlider from "../components/animated/AnimatedServiceSlider";

const Work: FC = (): JSX.Element => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <AnimatedTitleService>
              My work <span className="text-accent">.</span>
            </AnimatedTitleService>
            <AnimatedDescrServices>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ab
              deleniti maxime quae cupiditate facilis eaque quibusdam qui, ipsa
              nisi.
            </AnimatedDescrServices>
          </div>
          {/* slider */}
          <AnimatedServiceSlider>
            <WorkSlider />
          </AnimatedServiceSlider>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
