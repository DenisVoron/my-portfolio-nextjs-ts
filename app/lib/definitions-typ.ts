import { ReactNode } from "react";

export type navDataType = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export type childProp = {
  children: ReactNode;
};

export type propAboutLink = {
  title: string;
  index: number;
};

type typeSearchParams = {
  me: string;
  tab: string;
};

export interface ISearchParamsProp {
  searchParams?: typeSearchParams;
}
