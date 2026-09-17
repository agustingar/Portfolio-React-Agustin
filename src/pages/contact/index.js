import React, { useState, useEffect } from "react";
import { init, send } from "@emailjs/browser";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig, socialprofils } from "../../content_option";
import contactVisual from "../../assets/images/contact-ag.jpg";
import { Magnetic, Reveal, TextReveal } from "../../components/motion";
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

    send(
      contactConfig.YOUR_SERVICE_ID,
      contactConfig.YOUR_TEMPLATE_ID,
      templateParams
    )
      .then(
        () => {
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: t("contact.success"),
            variant: "success",
            show: true,
          });
        }
      )
      .catch((err) => {
        console.error("EmailJS error:", err);
        setFormdata({
          ...formData,
          loading: false,
          alertmessage: t("contact.error"),
          variant: "danger",
          show: true,
        });
        document.getElementsByClassName("co_alert")[0]?.scrollIntoView();
      });
  };

  useEffect(() => {
    // init EmailJS user id for @emailjs/browser
    try {
      if (contactConfig?.YOUR_USER_ID) init(contactConfig.YOUR_USER_ID);
    } catch (e) {
      console.warn("EmailJS init failed", e);
    }
  }, []);

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <section className="contact_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("meta.title")} | {t("contact.pageTitle")}
          </title>
          <meta name="description" content={t("meta.description")} />
        </Helmet>

        <Container>
          <Reveal>
            <div className="contact_hero">
              <p className="contact_eyebrow">
                <span className="contact_dot" aria-hidden="true" />
                {t("contact.eyebrow")}
              </p>
              <h1 className="contact_title">
                <TextReveal text={t("contact.heroTitle")} />
              </h1>
              <p className="contact_lead">{t("contact.description")}</p>
            </div>
          </Reveal>

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

          <Row className="contact_layout g-4">
            <Col lg="5" className="d-flex">
              <Reveal delay={0.05} className="contact_side w-100">
                <div className="contact_visual_wrap">
                  <div
                    className="contact_visual"
                    style={{ backgroundImage: `url(${contactVisual})` }}
                    role="img"
                    aria-label="AG Marketing"
                  />
                  <div className="contact_visual_shade" aria-hidden="true" />
                </div>
                <div className="contact_info_panel">
                  <h2 className="contact_info_title">{t("contact.getInTouch")}</h2>
                  <p className="contact_response">{t("contact.response")}</p>

                  <a
                    className="contact_info_card"
                    href={`mailto:${contactConfig.YOUR_EMAIL}`}
                  >
                    <span>{t("contact.email")}</span>
                    <strong>{contactConfig.YOUR_EMAIL}</strong>
                  </a>

                  {contactConfig.YOUR_FONE ? (
                    <a
                      className="contact_info_card"
                      href={`tel:${contactConfig.YOUR_FONE.replace(/\s/g, "")}`}
                    >
                      <span>{t("contact.phone")}</span>
                      <strong>{contactConfig.YOUR_FONE}</strong>
                    </a>
                  ) : null}

                  <div className="contact_socials">
                    <a
                      href={socialprofils.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={socialprofils.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </Reveal>
            </Col>

            <Col lg="7" className="d-flex">
              <Reveal delay={0.1} className="contact_form_wrap w-100">
                <form onSubmit={handleSubmit} className="contact__form">
                  <div className="contact_form_grid">
                    <label className="contact_field">
                      <span>{t("contact.namePlaceholder")}</span>
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
                    </label>
                    <label className="contact_field">
                      <span>{t("contact.emailPlaceholder")}</span>
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder={t("contact.emailPlaceholder")}
                        type="email"
                        value={formData.email || ""}
                        required
                        onChange={handleChange}
                      />
                    </label>
                    <label className="contact_field contact_field--full contact_field--message">
                      <span>{t("contact.messagePlaceholder")}</span>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder={t("contact.messagePlaceholder")}
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </label>
                  </div>
                  <Magnetic className="contact_submit_wrap">
                    <button className="btn ac_btn contact_submit" type="submit">
                      {formData.loading
                        ? t("contact.sending")
                        : t("contact.send")}
                    </button>
                  </Magnetic>
                </form>
              </Reveal>
            </Col>
          </Row>
        </Container>
        <div className={formData.loading ? "loading-bar" : "d-none"} />
      </section>
    </HelmetProvider>
  );
};
