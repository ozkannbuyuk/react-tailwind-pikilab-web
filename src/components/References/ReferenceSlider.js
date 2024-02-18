import React from "react";

import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const ReferenceSlider = () => {
  const { t } = useTranslation();

  const referenceSlider = t("referenceSlider", { returnObjects: true });

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {referenceSlider.map((item, index) => {
          const {
            referenceImg,
            referenceContent,
            referenceNameSurname,
            referenceCompany,
          } = item;

          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-6 xl:gap-12 items-center lg:items-start">
                <div className="w-[164px] h-[164px] lg:w-[328px] lg:h-[328px]">
                  <img
                    className="rounded-2xl"
                    src={require(`../../assets/img/references/${referenceImg}`)}
                    alt={referenceNameSurname}
                    title={referenceNameSurname}
                  />
                </div>
                <div className="flex flex-col max-w-3xl text-center lg:text-start">
                  <h5 className="font-body font-normal italic text-base lg:text-lg mb-2 lg:mb-4 mt-0 lg:mt-2">
                    {referenceContent}
                  </h5>
                  <div>
                    <p className="text-[14px] lg:text-base text-accent">
                      {referenceNameSurname}
                    </p>
                    <p className="text-[14px] lg:text-base text-paragraph">
                      {referenceCompany}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ReferenceSlider;
