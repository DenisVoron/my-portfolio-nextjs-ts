import { FC } from "react";
import Image from "next/image";
import ParticlesContainer from "./components/ParticlesContainer";
import ProjectsBtn from "./components/ProjectsBtn";
import Avatar from "./components/Avatar";
import AnimatedBtn from "./components/AnimatedBtn";

const Home: FC = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* {title} */}
          <h1 className="h1">
            Transforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </h1>
          {/* {subtitle} */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            facere optio ex fuga quae.
          </p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <AnimatedBtn>
            <ProjectsBtn />
          </AnimatedBtn>
        </div>
      </div>
      <div>Image</div>
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
