import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header: FC = (): JSX.Element => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:p-0 xl:h-[90px]">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4 xl:py-8">
          <Link href="/">
            <Image
              src={"/logo.png"}
              width={230}
              height={68}
              alt="logo image"
              priority={true}
              className="xl:w-auto xl:h-auto"
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
