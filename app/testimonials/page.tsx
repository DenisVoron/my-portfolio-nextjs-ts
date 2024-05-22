import TestimonialSlider from "../components/TestimonialSlider";
import AnimatedTitleTestimonial from "../components/animated/AnimatedTitleTestimonial";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <AnimatedTitleTestimonial>
          What clients <span className="text-accent">say.</span>
        </AnimatedTitleTestimonial>
        {/* slider */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
