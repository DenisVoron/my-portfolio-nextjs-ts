import Circles from "../components/Circles";
import TestimonialSlider from "../components/TestimonialSlider";
import AnimatedSliderTestimonial from "../components/animated/AnimatedSliderTestimonial";
import AnimatedTitleTestimonial from "../components/animated/AnimatedTitleTestimonial";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <AnimatedTitleTestimonial>
          What clients <span className="text-accent">say.</span>
        </AnimatedTitleTestimonial>
        {/* slider */}
        <AnimatedSliderTestimonial>
          <TestimonialSlider />
        </AnimatedSliderTestimonial>
      </div>
    </div>
  );
};

export default Testimonials;
