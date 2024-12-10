import React, { useState } from 'react';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "animate.css";
import './style.css';
import { contactConfig, meta } from "../../content_option";
import { recruitmentpage } from "../../content_option";
import home7 from "../../assets/images/home7.jpg";
import Preloader from "../../components/preload/Pre";
import Camera from "../../assets/cam.png";
import SoftSkillicon from "../../assets/soft.png";
import { createApi } from '../../supabaseService';
import * as emailjs from "emailjs-com";

export const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    bookingDate: '',
    serviceType: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createApi({ data: formData });
      alert('Đặt lịch thành công!');


      emailjs
        .send(
          // contactConfig.YOUR_SERVICE_ID,
          "service_kjet5mk",
          // contactConfig.YOUR_TEMPLATE_ID,
          "template_hhqwuoi",
          {
            to_name: formData.fullName,
            to_email: formData.email,
          },
          // contactConfig.YOUR_USER_ID,
          "ZICi4jVGSIwwRTyMd"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        bookingDate: '',
        serviceType: '',
        address: ''
      });
    } catch (error) {
      console.error('Lỗi khi đặt lịch:', error.message);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <HelmetProvider>
      <div className="backgroundvideo grain">
        <img loading="lazy" src={home7} alt="background" />
      </div>
      <Container className="p-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Đặt lịch | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Preloader />

        <Row className="mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-3" style={{ textAlign: "left", color: "white" }}>Đặt lịch ngay</h1>
            <hr className="t_border my-2 ml-0 text-left" style={{ borderColor: "white" }} />
          </Col>
        </Row>
        <Row className="mb-5 pt-md-3">
          <Col lg="6" className="learninfor">
            <Row className="inforrow">
              <div className="text-container">
                <p style={{ color: "white" }}>{recruitmentpage.title1}</p>
                <br />
                <img loading="lazy" src={Camera} alt="Overlay 1" className="overlay-image1" />
              </div>
            </Row>
            <Row className="inforrow" style={{ marginTop: "10px" }}>
              <div className="text-container">
                <p style={{ color: "white" }}>{recruitmentpage.title2}</p>
                <img loading="lazy" src={SoftSkillicon} alt="Overlay 2" className="overlay-image2" />
              </div>
            </Row>
          </Col>

          <Col lg="6" className="d-flex align-items-center">
            <div className="form-container shadow rounded animate__animated animate__fadeInRight">
              <h3 className="mb-4 text-center">Thông tin đặt lịch</h3>
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <Row>
                  <Col lg="6">
                    <input
                      className="form-control"
                      name="fullName"
                      placeholder="Họ và tên"
                      value={formData.fullName}
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
                  <Col lg="12">
                    <input
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col lg="6">
                    <input
                      type='date'
                      className="form-control"
                      name="bookingDate"
                      placeholder="Thời gian chụp"
                      value={formData.bookingDate}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col lg="6">
                    <select
                      className="form-control w-100"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      style={{ padding: "14px" }}
                    >
                      {[
                        { value: "", label: "Chọn kiểu chụp" },
                        { value: "Chụp hình sự kiện", label: "Chụp hình sự kiện" },
                        { value: "Chụp ảnh gia đình", label: "Chụp ảnh gia đình" },
                        { value: "Chụp ảnh chân dung", label: "Chụp ảnh chân dung" }
                      ].map((option, idx) => (
                        <option value={option.value} key={idx}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </Col>
                </Row>
                <textarea
                  rows="3"
                  className="form-control"
                  name="address"
                  placeholder="Địa chỉ"
                  value={formData.address}
                  onChange={handleChange}
                  style={{ marginTop: "5px" }}
                />
                {/* <textarea
                  className="form-control"
                  name="message"
                  placeholder="Tin nhắn"
                  rows="3"
                  value={formData.message}
                  style={{ marginTop: "5px" }}
                  onChange={handleChange}
                  required
                /> */}
                <br />
                <Row>
                  <Col lg="12">
                    <button className="btn ac_btn" type="submit">
                      {formData.loading ? "Đang gửi..." : "Đăng ký"}
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
