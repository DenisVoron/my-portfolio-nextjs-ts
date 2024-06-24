import { FC } from "react";
import WorkSlider from "@/app/components/WorkSlider";
import Bulb from "@/app/components/Bulb";
import Circles from "@/app/components/Circles";
import AnimatedDescrWork from "../components/animated/AnimatedDescrWork";
import AnimatedTitlePracticeAndWork from "../components/animated/AnimatedTitlePracticeAndWork";
import AnimatedSliderPractiseAndWork from "../components/animated/AnimatedSliderPractiseAndWork";

const Work: FC = (): JSX.Element => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 mt-5 xl:mb-0">
            <AnimatedTitlePracticeAndWork>
              My work <span className="text-accent">.</span>
            </AnimatedTitlePracticeAndWork>
            {/* description */}
            <AnimatedDescrWork />
          </div>
          {/* slider */}
          <AnimatedSliderPractiseAndWork>
            <WorkSlider />
          </AnimatedSliderPractiseAndWork>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
