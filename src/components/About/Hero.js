import React from "react";

import { useTranslation } from "react-i18next";

import { useWindowWidth } from "@react-hook/window-size";

import { Link } from "react-scroll";

import TechnologyImg from "../../assets/img/about/technology.png";

const Hero = () => {
  const { t } = useTranslation();

  const width = useWindowWidth();

  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex items-center pt-16 lg:pt-20">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-2xl lg:text-5xl font-medium lg:font-extrabold mb-2 lg:mb-4 text-center lg:text-start !leading-tight">
              {t("hero.titleTop")} <br />
              {t("hero.titleBottom")}
            </h1>
            <p className="text-[14px] lg:text-base text-paragraph mb-6 lg:mb-12 max-w-[520px] text-center lg:text-left">
              {t("hero.subtitle")}
            </p>

            {width > 1024 && (
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
                title={t("hero.button")}
              >
                <button className="btn">{t("hero.button")}</button>
              </Link>
            )}

            {width <= 1024 && (
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                className="cursor-pointer"
                title={t("hero.button")}
              >
                <button className="btn">{t("hero.button")}</button>
              </Link>
            )}
          </div>

          <div className="hidden lg:flex flex-1 justify-end items-end">
            <img
              src={TechnologyImg}
              title={t("hero.imgName")}
              alt={t("hero.imgName")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
