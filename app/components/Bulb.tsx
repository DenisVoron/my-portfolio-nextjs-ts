import { FC } from "react";
import Image from "next/image";

const Bulb: FC = (): JSX.Element => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        alt="bulb decoration"
        className="w-auto"
      />
    </div>
  );
};

export default Bulb;
