import React from "react";

import { useTranslation } from "react-i18next";

import ReferenceSlider from "./ReferenceSlider";

const References = () => {
  const { t } = useTranslation();

  return (
    <section id="references" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">{t("references.title")}</h2>
          <p className="section-subtitle">{t("references.subtitle")}</p>
        </div>

        <ReferenceSlider />
      </div>
    </section>
  );
};

export default References;
