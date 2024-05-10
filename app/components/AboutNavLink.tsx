"use client";

import { FC } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { propAboutLink } from "../lib/definitions-typ";

const AboutNavLink: FC<propAboutLink> = ({ title, index }): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (title: string, index: string) => {
    const params = new URLSearchParams(searchParams);

    if (title) {
      params.set("me", title);
      params.set("tab", index);
    } else {
      params.delete("me");
      params.delete("tab");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const stringParams = searchParams.get("me")?.toString() || "";

  return (
    <div
      className={`${
        stringParams === title &&
        "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
      onClick={() => handleClick(title, index.toString())}
    >
      {title}
    </div>
  );
};

export default AboutNavLink;
