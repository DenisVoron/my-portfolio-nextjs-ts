import { FC } from "react";
import ParticlesContainer from "./components/ParticlesContainer";
import ProjectsBtn from "./components/ProjectsBtn";
import Avatar from "./components/Avatar";
import AnimatedBtn from "./components/animated/AnimatedBtn";
import AnimatedText from "./components/animated/AnimatedText";
import AnimatedTitle from "./components/animated/AnimatedTitle";
import AnimatedAvatar from "./components/animated/AnimatedAvatar";

const Home: FC = (): JSX.Element => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* {title} */}
          <AnimatedTitle>
            Transforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </AnimatedTitle>
          {/* {subtitle} */}
          <AnimatedText/>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <AnimatedBtn>
            <ProjectsBtn />
          </AnimatedBtn>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* {bg-image} */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-10"></div>
        <ParticlesContainer />
        <AnimatedAvatar>
          <Avatar />
        </AnimatedAvatar>
      </div>
    </div>
  );
};

export default Home;
