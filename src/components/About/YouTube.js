import React from "react";

import { useTranslation } from "react-i18next";

import { FaShareSquare } from "react-icons/fa";

import PikilabYoutubeTr from "../../assets/img/about/pikilab-youtube-tr.png";
import PikilabYoutubeEn from "../../assets/img/about/pikilab-youtube-en.png";

const YouTube = () => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language;

  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-24">
          <img
            className="object-cover h-full w-[566px] mx-auto lg:mx-0 rounded-2xl"
            src={
              lang == "tr" || lang == "tr-TR"
                ? PikilabYoutubeTr
                : PikilabYoutubeEn
            }
            alt={t("youtube.imgName")}
            title={t("youtube.imgName")}
          />
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
            <h2 className="text-2xl lg:text-4xl font-medium lg:font-extrabold mb-1 lg:mb-2 text-center lg:text-start">
              {t("youtube.title")}
            </h2>
            <a
              className="text-[14px] lg:text-base text-[#d63032] hover:text-[#AA3939] transition-all duration-500 mb-2 lg:mb-8 max-w-[520px] text-center lg:text-left"
              href={t("youtube.url")}
              title={t("youtube.urlName")}
              target="_blank"
              rel="noreferrer"
            >
              {t("youtube.urlName")}
            </a>
            <p className="text-[14px] lg:text-base text-paragraph mb-3 lg:mb-6 max-w-[520px] text-center lg:text-left">
              {t("youtube.contentTop")}
            </p>
            <p className="text-[14px] lg:text-base text-paragraph mb-6 lg:mb-12 max-w-[520px] text-center lg:text-left">
              {t("youtube.contentBottom")}
            </p>
            <a
              href={t("youtube.url")}
              title={t("youtube.button")}
              target="_blank"
              rel="noreferrer"
            >
              <button className="flex items-center justify-center rounded-sm text-white text-[14px] lg:text-base px-4 lg:px-8 py-2 lg:py-4 bg-[#d63032] hover:bg-[#AA3939] transition-all duration-500 h-[40px] lg:h-[54px]">
                {t("youtube.button")} <FaShareSquare className="ml-2" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
