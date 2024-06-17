import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn: FC = (): JSX.Element => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        rel="preload prefetch"
        className="relative z-20 w-[165px] h-[165px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={121}
          height={128}
          alt=""
          priority={true}
          className="animate-spin-slow w-auto h-full max-w-[121px] max-h-[128px]"
        />
        <HiArrowRight className="absolute text-3xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
