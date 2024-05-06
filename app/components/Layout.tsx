import { FC } from "react";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout: FC = (): JSX.Element => {
  return (
    <header>
      <TopLeftImg />
      <Nav />
      <Header />
    </header>
  );
};

export default Layout;
