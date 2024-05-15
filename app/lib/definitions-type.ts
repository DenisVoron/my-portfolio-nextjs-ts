import { MutableRefObject, ReactNode } from "react";
import Swiper from "swiper";
import { SwiperModule } from "swiper/types";

declare global {
  namespace JSX {
    export interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        children: Element[];
        pagination: true;
        freeMode: true;
        modules: SwiperModule[];
        className: string;
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

export type UnitedDataTyp = DataWithIcon | DataWithStage;

//  a11y: Swiper;
// modules: SwiperModule[];

// freeMode: boolean;

// breakpoints: {
//           320: { slidesPerView: number; spaceBetween: number };
//           640: { slidesPerView: number; spaceBetween: number };
//         };
