import { ReactNode } from "react";

export type navDataType = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export type childProp = {
  children: ReactNode;
};
