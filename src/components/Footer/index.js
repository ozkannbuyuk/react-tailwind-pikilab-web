import React from "react";

import { useTranslation } from "react-i18next";

import { useWindowWidth } from "@react-hook/window-size";

import { social } from "../../data";

import { Link } from "react-scroll";

import Logo from "../../assets/img/pikilab-logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const width = useWindowWidth();

  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, title, icon } = item;

              return (
                <a
                  className="text-accent hover:text-accent-hover transition-all duration-500 text-[14px] lg:text-base"
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  {icon}
                </a>
              );
            })}
          </div>

          {width > 1024 && (
            <div>
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
            </div>
          )}

          {width <= 1024 && (
            <div>
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
            </div>
          )}

          <p className="text-[14px] lg:text-base">
            &copy; 2024 - PikiLab. <p>{t("footer.copyright")}</p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
