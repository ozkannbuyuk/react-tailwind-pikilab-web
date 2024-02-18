import React from "react";

import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet";

import Header from "./components/Header";
import About from "./components/About";
import Brands from "./components/Brands";
import Services from "./components/Services";
import References from "./components/References";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BackToTopButton from "./components/BackToTopButton";

import CookieConsent from "react-cookie-consent";

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("head.title")}</title>
        <meta name="description" content={t("head.description")} />
        <meta name="keywords" content={t("head.keywords")} />
        <meta name="author" content={t("head.author")} />
      </Helmet>

      <Header />
      <About />
      <Brands />
      <Services />
      <References />
      <Contact />
      <Footer />

      <BackToTopButton />

      <CookieConsent
        location="bottom"
        style={{
          background: "#050402",
          color: "#fff",
          textAlign: "left",
          fontFamily: "Work Sans",
          fontSize: "14px",
        }}
        buttonStyle={{
          background: "#fff",
          color: "#050402",
          fontFamily: "Work Sans",
          fontSize: "14px",
        }}
        buttonText={t("cookie.buttonText")}
        expires={365}
      >
        {t("cookie.text")}
      </CookieConsent>
    </div>
  );
};

export default App;
