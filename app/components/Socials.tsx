import { FC } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaEnvelope,
  FaViber,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Socials: FC = (): JSX.Element => (
  <div className="flex items-center gap-x-5 text-sm md:text-lg">
    <Link
      href={"tel:+38(067)446-46-67"}
      className="hover:after:content-['+38(067)446-46-67'] after:text-xs sm:after:text-base after:absolute after:top-[42px] after:right-[11rem] sm:after:top-14 sm:after:right-[31rem] lg:after:top-8 lg:after:right-80 hover:text-accent transition-all duration-300"
    >
      <FaPhoneAlt />
    </Link>
    <div className="hover:after:content-['Ukraine.Kyiv.str.Verbytsky'] after:text-xs sm:after:text-base after:absolute after:top-[42px] after:right-[9rem] sm:after:top-14 sm:after:right-[31rem] lg:after:top-8 lg:after:right-80 hover:text-accent transition-all duration-300">
      <FaMapMarkedAlt />
    </div>
    <Link
      href={"mailto:denis.voronko@gmail.com"}
      className="hover:text-accent transition-all duration-300"
      title="send me mail"
    >
      <FaEnvelope />
    </Link>
    <Link
      href="http://viber://add?number=380674464667"
      className="hover:text-accent transition-all duration-300"
      title="send me viber"
    >
      <FaViber />
    </Link>
    <Link
      href={"https://www.linkedin.com/in/denis-voronko-9495a9264"}
      target="_blank"
      className="hover:text-accent transition-all duration-300"
    >
      <FaLinkedin />
    </Link>
    <Link
      href={"https://github.com/DenisVoron"}
      target="_blank"
      className="hover:text-accent transition-all duration-300"
    >
      <FaGithub />
    </Link>
  </div>
);

export default Socials;
