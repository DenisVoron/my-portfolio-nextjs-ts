import { FC } from "react";
import WorkSlider from "@/app/components/WorkSlider";
import Bulb from "@/app/components/Bulb";
import Circles from "@/app/components/Circles";
import AnimatedTitleServiceAndWork from "../components/animated/AnimatedTitleServicesAndWork";
import AnimatedDescrServicesAndWork from "../components/animated/AnimatedDescrServicesAndWork";
import AnimatedSliderServicesAndWork from "../components/animated/AnimatedSliderServicesAndWork";

const Work: FC = (): JSX.Element => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <AnimatedTitleServiceAndWork>
              My work <span className="text-accent">.</span>
            </AnimatedTitleServiceAndWork>
            <AnimatedDescrServicesAndWork>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ab
              deleniti maxime quae cupiditate facilis eaque quibusdam qui, ipsa
              nisi.
            </AnimatedDescrServicesAndWork>
          </div>
          {/* slider */}
          <AnimatedSliderServicesAndWork>
            <WorkSlider />
          </AnimatedSliderServicesAndWork>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
