import React from "react";

import { useTranslation } from "react-i18next";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const { t } = useTranslation();

  const skills = t("skills", { returnObjects: true });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 12,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <Slider {...settings}>
          {skills.map((item, index) => {
            const { skillImg, skillName } = item;

            return (
              <div
                className="!flex !flex-col !items-center focus:outline-0 focus:outline-none"
                key={index}
              >
                <img
                  src={require(`../../assets/img/about/${skillImg}`)}
                  alt={skillName}
                  title={skillName}
                  className="w-[64px] lg:w-[72px]"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
