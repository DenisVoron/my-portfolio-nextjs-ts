import { ReactNode } from "react";

declare global {
  namespace JSX {
    export interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        children: Element[];
        class: string;
      };
      "swiper-slide": React.DetailedHTMLProps<
        React.HtmlHTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

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

export type ImageObj = {
  title: string;
  path: string;
  link: string;
};

export type ImagesArr = {
  images: ImageObj[];
};

export type SlidesTypes = {
  slides: ImagesArr[];
};

export type IconAboutData = {
  title: string;
  info: DataWithIcon[];
};

export type StageAboutData = {
  title: string;
  info: DataWithStage[];
};

export type TypeAboutData = (IconAboutData | StageAboutData)[];

export type UnitedDataTyp = DataWithIcon | DataWithStage;
