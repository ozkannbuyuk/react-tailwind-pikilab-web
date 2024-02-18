import React, { useRef } from "react";

import { useTranslation } from "react-i18next";

import emailjs from "@emailjs/browser";

import { FiMail, FiMapPin } from "react-icons/fi";

import { Formik } from "formik";

import * as Yup from "yup";

const Contact = () => {
  const form = useRef();

  const { t } = useTranslation();

  const service = process.env.REACT_APP_FORM_SERVICE;
  const template = process.env.REACT_APP_FORM_TEMPLATE;
  const api = process.env.REACT_APP_FORM_API;

  return (
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="section-subtitle">{t("contact.subtitle")}</p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-1 flex-col items-center lg:items-start text-center lg:text-start space-y-8 mb-12 lg:mb-0">
            <div className="flex flex-col lg:flex-row gap-x-0 lg:gap-x-4">
              <div className="text-accent flex justify-center mb-2 lg:mb-0 text-xl lg:text-2xl">
                <FiMail />
              </div>
              <div>
                <h4 className="font-body font-normal text-base lg:text-lg mb-1">
                  {t("contact.emailTitle")}
                </h4>
                <p className="text-[14px] lg:text-base text-paragraph mb-1">
                  {t("contact.emailContent")}
                </p>
                <a
                  href={t("contact.emailTo")}
                  title={t("contact.email")}
                  className=" text-[14px] lg:text-base text-accent hover:text-accent-hover transition-all duration-500 cursor-pointer"
                >
                  {t("contact.email")}
                </a>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-x-0 lg:gap-x-4">
              <div className="text-accent flex justify-center mb-2 lg:mb-0 text-xl lg:text-2xl">
                <FiMapPin />
              </div>
              <div>
                <h4 className="font-body font-normal text-base lg:text-lg mb-1">
                  {t("contact.locationTitle")}
                </h4>
                <p className="text-[14px] lg:text-base text-paragraph">
                  {t("contact.locationContent")}
                </p>
              </div>
            </div>
          </div>

          <Formik
            initialValues={{
              name_surname: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name_surname: Yup.string().required(
                t("contact.formSendFillError")
              ),
              email: Yup.string()
                .email(t("contact.formSendEmailError"))
                .required(t("contact.formSendFillError")),
              message: Yup.string().required(t("contact.formSendFillError")),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              emailjs.sendForm(service, template, form.current, api);

              setTimeout(() => {
                setSubmitting(false);
                resetForm();
              }, 4000);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              touched,
              isSubmitting,
            }) => (
              <form
                ref={form}
                className="space-y-4 lg:space-y-8 w-full max-w-[768px]"
                onSubmit={handleSubmit}
              >
                <div className="flex justify-between gap-4 lg:gap-8">
                  <div className="w-full">
                    <input
                      type="text"
                      className="input"
                      placeholder={t("contact.name_surname")}
                      name="name_surname"
                      value={values.name_surname}
                      onChange={handleChange}
                    />
                    {errors.name_surname && touched.name_surname && (
                      <p className="text-[14px] lg:text-base text-[#d63032] mt-1">
                        {errors.name_surname}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      className="input"
                      placeholder={t("contact.e-mail")}
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email && (
                      <p className="text-[14px] lg:text-base text-[#d63032] mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <textarea
                    className="textarea"
                    placeholder={t("contact.message")}
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && touched.message && (
                    <p className="text-[14px] lg:text-base text-[#d63032] mt-1">
                      {errors.message}
                    </p>
                  )}

                  {isSubmitting && (
                    <p className="text-[14px] lg:text-base text-[#008000] mt-1">
                      {t("contact.formSendSuccessful")}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn"
                  title={t("contact.formSend")}
                >
                  {t("contact.formSend")}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
