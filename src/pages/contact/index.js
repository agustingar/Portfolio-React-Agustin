import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { Reveal } from "../../components/motion";
import { useTranslation } from "../../i18n/LanguageContext";

export const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: t("contact.success"),
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            ...formData,
            loading: false,
            alertmessage: t("contact.error"),
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("meta.title")} | {t("contact.pageTitle")}
          </title>
          <meta name="description" content={t("meta.description")} />
        </Helmet>
        <Reveal>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4 tit">{t("contact.pageTitle")}</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        </Reveal>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <Reveal delay={0.05}>
              <h3 className=" py-4 tit ">{t("contact.getInTouch")}</h3>
              <address>
                <strong>{t("contact.email")}:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <br />
                <br />
                {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                  <p>
                    <strong>{t("contact.phone")}:</strong>{" "}
                    {contactConfig.YOUR_FONE}
                  </p>
                ) : (
                  ""
                )}
              </address>
              <p>{t("contact.description")}</p>
            </Reveal>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <Reveal delay={0.1} className="w-100">
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder={t("contact.namePlaceholder")}
                      value={formData.name || ""}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder={t("contact.emailPlaceholder")}
                      type="email"
                      value={formData.email || ""}
                      required
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit">
                      {formData.loading ? t("contact.sending") : t("contact.send")}
                    </button>
                  </Col>
                </Row>
              </form>
            </Reveal>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
