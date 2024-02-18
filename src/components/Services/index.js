import React from "react";

import { useTranslation } from "react-i18next";

import { CgWebsite } from "react-icons/cg";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { AiOutlineMobile } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">{t("services.title")}</h2>
          <p className="section-subtitle">{t("services.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-secondary p-3 lg:p-6 rounded-2xl">
            <div className="text-accent rounded-sm w-6 h-6 xl:w-12 xl:h-12 flex justify-center items-center mb-6 lg:mb-24 text-[28px]">
              <CgWebsite />
            </div>
            <h4 className="text-white font-body font-normal text-base lg:text-lg mb-2">
              {t("serviceContent1.title")}
            </h4>
            <p className="text-[14px] lg:text-base text-paragraph">
              {t("serviceContent1.content")}
            </p>
          </div>

          <div className="bg-secondary p-3 lg:p-6 rounded-2xl">
            <div className="text-accent rounded-sm w-6 h-6 xl:w-12 xl:h-12 flex justify-center items-center mb-6 lg:mb-24 text-[28px]">
              <HiOutlineCodeBracket />
            </div>
            <h4 className="text-white font-body font-normal text-base lg:text-lg mb-2">
              {t("serviceContent2.title")}
            </h4>
            <p className="text-[14px] lg:text-base text-paragraph">
              {t("serviceContent2.content")}
            </p>
          </div>

          <div className="bg-secondary p-3 lg:p-6 rounded-2xl">
            <div className="text-accent rounded-sm w-6 h-6 xl:w-12 xl:h-12 flex justify-center items-center mb-6 lg:mb-24 text-[28px]">
              <AiOutlineMobile />
            </div>
            <h4 className="text-white font-body font-normal text-base lg:text-lg mb-2">
              {t("serviceContent3.title")}
            </h4>
            <p className="text-[14px] lg:text-base text-paragraph">
              {t("serviceContent3.content")}
            </p>
          </div>

          <div className="bg-secondary p-3 lg:p-6 rounded-2xl">
            <div className="text-accent rounded-sm w-6 h-6 xl:w-12 xl:h-12 flex justify-center items-center mb-6 lg:mb-24 text-[28px]">
              <IoShareSocialOutline />
            </div>
            <h4 className="text-white font-body font-normal text-base lg:text-lg mb-2">
              {t("serviceContent4.title")}
            </h4>
            <p className="text-[14px] lg:text-base text-paragraph">
              {t("serviceContent4.content")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
