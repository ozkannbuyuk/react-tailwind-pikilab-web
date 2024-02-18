import React from "react";

import { useTranslation } from "react-i18next";

const Brands = () => {
  const { t } = useTranslation();

  const brandsList = t("brandsList", { returnObjects: true });

  return (
    <section id="brands" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">{t("brands.title")}</h2>
          <p className="section-subtitle">{t("brands.subtitle")}</p>
        </div>

        <section className="grid lg:grid-cols-3 gap-x-0 lg:gap-x-8 gap-y-8 lg:gap-y-8">
          {brandsList.map((item, index) => {
            const { brandImg, brandName, brandUrl, brandUrlName } = item;

            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                <div className="mb-2 lg:mb-4 w-[300px] lg:w-full">
                  <img
                    className="rounded-2xl"
                    src={require(`../../assets/img/brands/${brandImg}`)}
                    alt={brandName}
                    title={brandName}
                  />
                </div>
                <a
                  className="text-[14px] lg:text-base text-accent hover:text-accent-hover transition-all duration-500 cursor-pointer mb-1 lg:mb-2"
                  href={brandUrl}
                  title={brandName}
                  target="_blank"
                  rel="noreferrer"
                >
                  {brandUrlName}
                </a>
                <h3 className="font-body font-normal text-base lg:text-lg">
                  {brandName}
                </h3>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Brands;
