import { FC } from "react";
import Image from "next/image";
import ParticlesContainer from "./components/ParticlesContainer";
import ProjectsBtn from "./components/ProjectsBtn";
import Avatar from "./components/Avatar";
import AnimatedBtn from "./components/AnimatedBtn";
import AnimatedText from "./components/AnimatedText";
import AnimatedTitle from "./components/AnimatedTitle";

const Home: FC = () => {
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
          <AnimatedText>
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere optio ex fuga quae."
            }
          </AnimatedText>
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
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <div>Particles</div>
        <div className=" w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <ParticlesContainer>
  <ProjectsBtn>
    <Avatar></Avatar>
  </ProjectsBtn>
</ParticlesContainer>; */
}
