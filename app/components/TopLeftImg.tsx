import { FC } from "react";
import Image from "next/image";

const TopLeftImg: FC = (): JSX.Element => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/top-left-img.png"
        priority={true}
        alt="top-left-image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
