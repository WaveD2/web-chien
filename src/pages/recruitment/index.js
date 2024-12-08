import React from 'react';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "animate.css";
import './style.css';
import { meta } from "../../content_option";
import { recruitmentpage } from "../../content_option";
import home7 from "../../assets/images/home7.jpg";
import Preloader from "../../components/preload/Pre";
import Camera from "../../assets/cam.png";
import SoftSkillicon from "../../assets/soft.png";

export const Recruit = () => {
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
            <Row className="inforrow" style={{
              marginTop: "10px"
            }}>
              <div className="text-container">
                <p style={{ color: "white" }}>{recruitmentpage.title2}</p>
                <img loading="lazy" src={SoftSkillicon} alt="Overlay 2" className="overlay-image2" />
              </div>
            </Row>
          </Col>

          <Col lg="6" className="right-content">
            <div className="form-container shadow rounded animate__animated animate__fadeInRight">
              <h3 className="mb-4 text-center">Thông tin đặt lịch</h3>
              <Form>
                <div className="form-grid">
                  <Form.Group controlId="fullName" className="form-item">
                    <Form.Label>Họ và Tên</Form.Label>
                    <Form.Control type="text" placeholder="Nhập họ và tên" required />
                  </Form.Group>

                  <Form.Group controlId="phone" className="form-item">
                    <Form.Label>SĐT</Form.Label>
                    <Form.Control type="tel" placeholder="Nhập số điện thoại" required />
                  </Form.Group>

                  <Form.Group controlId="bookingDate" className="form-item">
                    <Form.Label>Ngày Book</Form.Label>
                    <Form.Control type="date" required />
                  </Form.Group>

                  <Form.Group controlId="serviceType" className="form-item">
                    <Form.Label>Loại Dịch Vụ</Form.Label>
                    <Form.Select required>
                      <option value="">Chọn loại dịch vụ</option>
                      <option value="Chụp hình sự kiện">Chụp hình sự kiện</option>
                      <option value="Chụp ảnh gia đình">Chụp ảnh gia đình</option>
                      <option value="Chụp ảnh chân dung">Chụp ảnh chân dung</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="address" className="form-item">
                    <Form.Label>Địa Chỉ</Form.Label>
                    <Form.Control type="text" placeholder="Nhập địa chỉ" required />
                  </Form.Group>
                </div>

                <div className="text-center mt-4">
                  <Button type="submit" className="w-100 btn-submit">
                    Đặt Lịch
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
