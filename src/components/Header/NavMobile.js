import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

import { motion } from "framer-motion";

import { Link } from "react-scroll";

const NavMobile = ({ bg }) => {
  const { t, i18n } = useTranslation();

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

  const navigation = t("navigation", { returnObjects: true });

  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative flex">
      <div className="mr-5">
        <select
          className={`${
            bg
              ? "hover:bg-tertiary focus:bg-tertiary"
              : "hover:bg-primary focus:bg-primary"
          } text-white bg-transparent outline-none transition-all duration-500 pl-2 pr-2 pt-1 pb-1 w-full text-[14px]`}
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

      <div
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center cursor-pointer text-white"
      >
        <BiMenuAltRight className="w-5 h-5" />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-500 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-white absolute top-10 right-10"
        >
          <AiOutlineClose className="w-5 h-5" />
        </div>

        {navigation.map((item, index) => {
          const { name, href } = item;

          return (
            <li
              className="text-white hover:text-accent transition-all duration-500 cursor-pointer mb-8"
              key={index}
            >
              <Link
                activeClass="active-mobile"
                to={href}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
                title={name}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          );
        })}

        <li className="text-white hover:text-accent transition-all duration-500 cursor-pointer mb-8">
          <a
            href="https://blog.pikilab.com"
            title="Blog"
            target="_blank"
            className="flex items-center"
          >
            <FaShare />
            <span className="ml-1">Blog</span>
          </a>
        </li>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
