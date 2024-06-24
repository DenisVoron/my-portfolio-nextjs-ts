import { FC } from "react";
import PracticeSlider from "@/app/components/PracticeSlider";
import Bulb from "@/app/components/Bulb";
import Circles from "@/app/components/Circles";
import AnimatedTitlePracticeAndWork from "../components/animated/AnimatedTitlePracticeAndWork";
import AnimatedDescrPractice from "../components/animated/AnimatedDescrPractice";
import AnimatedSliderPractiseAndWork from "../components/animated/AnimatedSliderPractiseAndWork";

const Practice: FC = (): JSX.Element => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <AnimatedTitlePracticeAndWork>
              My practice <span className="text-accent">.</span>
            </AnimatedTitlePracticeAndWork>
            <AnimatedDescrPractice/>
          </div>
          {/* slider */}
          <AnimatedSliderPractiseAndWork>
            <PracticeSlider />
          </AnimatedSliderPractiseAndWork>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Practice;
