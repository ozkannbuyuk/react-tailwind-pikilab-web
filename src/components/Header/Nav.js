import React from "react";

import { useTranslation } from "react-i18next";

import { Link } from "react-scroll";

import { FaShare } from "react-icons/fa";

const Nav = () => {
  const { t } = useTranslation();

  const navigation = t("navigation", { returnObjects: true });

  return (
    <nav>
      <ul className="flex space-x-8 text-base">
        {navigation.map((item, index) => {
          const { name, href } = item;

          return (
            <li
              className="text-white hover:text-accent transition-all duration-500 cursor-pointer"
              key={index}
            >
              <Link
                activeClass="active"
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                title={name}
              >
                {name}
              </Link>
            </li>
          );
        })}
        <li className="text-white hover:text-accent transition-all duration-500 cursor-pointer">
          <a
            href="https://blog.pikilab.com"
            title="Blog"
            target="_blank"
            className="flex items-center"
          >
            <FaShare />
            <span className="ml-1">Blog</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
