import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import Animated from "./components/animated/Animated";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Full-Stack Developer",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <Layout />
        <Animated>{children}</Animated>
      </body>
    </html>
  );
};
export default RootLayout;

// https://youtu.be/qp0-L_M3Ad4?t=9577
