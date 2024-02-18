import React, { useState, useEffect } from "react";

import { useWindowWidth } from "@react-hook/window-size";

import { Link } from "react-scroll";

import Logo from "../../assets/img/pikilab-logo.png";

import Nav from "./Nav";
import NavSettings from "./NavSettings";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 80 ? setBg(true) : setBg(false);
    });
  });

  const width = useWindowWidth();

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-16 lg:h-20" : "h-20 lg:h-24"
      } flex items-center fixed top-0 w-full z-10 transition-all duration-500`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {width > 1024 && (
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
            title="PikiLab"
          >
            <img src={Logo} alt="PikiLab" width={180} />
          </Link>
        )}

        {width <= 1024 && (
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-64}
            className="cursor-pointer"
            title="PikiLab"
          >
            <img src={Logo} alt="PikiLab" width={140} />
          </Link>
        )}

        <div className="hidden lg:block">
          <Nav />
        </div>

        <div className="hidden lg:block">
          <NavSettings bg={bg} />
        </div>

        <div className="lg:hidden">
          <NavMobile bg={bg} />
        </div>
      </div>
    </header>
  );
};

export default Header;
