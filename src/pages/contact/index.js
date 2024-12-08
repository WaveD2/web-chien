import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import Typewriter from "typewriter-effect";
import FocusRing from "../../components/focusring";
import home6 from "../../assets/images/home6.jpg";
import Preloader from "../../components/preload/Pre";

export const ContactUs = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const background = document.querySelector(".backgroundvideo img");
      const blur = scrollPosition * 0.015; // Làm mờ ảnh
      background.style.filter = `blur(${blur}px) brightness(60%)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });

    const templateParams = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
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
          setFormData({
            ...formData,
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormData({
            ...formData,
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <FocusRing />
      <Container className="p-header">
        <Helmet>
          <title>Liên hệ | {meta.title}</title>
        </Helmet>

        <Preloader />


        <div className="backgroundvideo grain">
          <img src={home6} alt="background" />
        </div>
        <Row className=" mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">
              Liên hệ tư vấn <span className="wave">👋</span>
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormData({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Thông tin liên hệ</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
              <br />
              <strong>Số điện thoại:</strong> {contactConfig.YOUR_FONE || "Không có"}
              <br />
              <strong>Địa chỉ:</strong> {contactConfig.YOUR_ADDRESS}
            </address>
            <Typewriter
              options={{
                strings: ["#Photo Concept", "#Lưu chọn khoảnh khắc"],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                cursor: "_",
              }}
            />
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Họ và tên"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col lg="6">
                  <input
                    className="form-control"
                    name="phone"
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col lg="6">
                  <input
                    className="form-control"
                    name="address"
                    placeholder="Địa chỉ"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control"
                name="message"
                placeholder="Tin nhắn"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <br />
              <Row>
                <Col lg="12">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Đang gửi..." : "Alo mình ngay nha!"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
