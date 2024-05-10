import { ReactNode } from "react";

export type NavDataType = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export type ChildProp = {
  children: ReactNode;
};

export type PropAboutLink = {
  title: string;
  index: number;
};

type TypeSearchParams = {
  me: string;
  tab: string;
};

export interface ISearchParamsProp {
  searchParams?: TypeSearchParams;
}

type DataWithIcon = {
  title: string;
  icons: React.JSX.Element[];
};

type DataWithStage = {
  title: string;
  stage: string;
};

export type UnitedDataTyp = DataWithIcon | DataWithStage;