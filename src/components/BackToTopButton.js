import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { animateScroll as scroll } from "react-scroll";

import { FiChevronUp } from "react-icons/fi";

const BackToTopButton = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        title={t("backToTopButton.title")}
        className="text-white bg-accent hover:bg-accent-hover transition-all duration-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full fixed right-10 bottom-10 lg:right-20 lg:bottom-20 cursor-pointer flex justify-center items-center"
      >
        <FiChevronUp className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
    )
  );
};

export default BackToTopButton;
