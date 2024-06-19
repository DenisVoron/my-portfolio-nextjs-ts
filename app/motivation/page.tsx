import { FC } from "react";
import Circles from "../components/Circles";
import AnimatedTitleMotivation from "../components/animated/AnimatedTitleMotivation";
import AnimatedSliderMotivation from "../components/animated/AnimatedSliderMotivation";
import MotivationSlider from "../components/MotivationSlider";

const Motivation: FC = (): JSX.Element => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <AnimatedTitleMotivation>
          Quotes for <span className="text-accent">motivation.</span>
        </AnimatedTitleMotivation>
        {/* slider */}
        <AnimatedSliderMotivation>
          <MotivationSlider />
        </AnimatedSliderMotivation>
      </div>
    </div>
  );
};

export default Motivation;
