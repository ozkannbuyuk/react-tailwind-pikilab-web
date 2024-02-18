import React from "react";

import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  const partners = t("partners", { returnObjects: true });

  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-32">
          {partners.map((item, index) => {
            const { partnerUrl, partnerImg, partnerName } = item;

            return (
              <div key={index} className="flex items-center justify-center">
                <a
                  href={partnerUrl}
                  title={partnerName}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require(`../../assets/img/about/${partnerImg}`)}
                    alt={partnerName}
                    title={partnerName}
                    className="w-[150px] lg:w-full cursor-pointer"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
