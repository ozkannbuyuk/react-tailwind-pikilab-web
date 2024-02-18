import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { social } from "../../data";

const NavSettings = ({ bg }) => {
  const { i18n } = useTranslation();

  const onChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  }, []);

  return (
    <div className="flex">
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          const { href, title, icon } = item;

          return (
            <li
              className="flex justify-center items-center text-accent hover:text-accent-hover"
              key={index}
            >
              <a
                href={href}
                title={title}
                className="text-base transition-all duration-500 hover:text-accent-hover"
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="ml-10">
        <select
          className={`${
            bg
              ? "hover:bg-tertiary focus:bg-tertiary"
              : "hover:bg-primary focus:bg-primary"
          } text-white bg-transparent outline-none transition-all duration-500 pl-2 pr-2 pt-1 pb-1 w-full text-base`}
          onChange={onChangeLanguage}
        >
          <option value="en" className="lang">
            EN
          </option>
          <option value="tr" className="lang">
            TR
          </option>
        </select>
      </div>
    </div>
  );
};

export default NavSettings;
