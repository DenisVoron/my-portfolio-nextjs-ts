import Image from "next/image";
import { FC } from "react";

const Circles: FC = (): JSX.Element => {
  return (
    <div className="w-[200px] xl:w-[215px] absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        alt="image circles"
        className="w-auto"
        priority={true}
      />
    </div>
  );
};

export default Circles;
