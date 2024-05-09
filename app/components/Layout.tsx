import { FC } from "react";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout: FC = (): JSX.Element => {
  return (
    <div>
      <TopLeftImg />
      <Nav />
      <Header />
    </div>
  );
};

export default Layout;
