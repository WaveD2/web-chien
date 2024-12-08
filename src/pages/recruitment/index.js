import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";

import { recruitmentpage } from "../../content_option";
import Preloader from "../../components/preload/Pre";
import Camera from "../../assets/cam.png";
import home7 from "../../assets/images/home7.jpg";
import SoftSkillicon from "../../assets/soft.png";
export const Recruit = () => {

  return (
    <HelmetProvider >
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
            <h1 className="display-4 mb-4" style={{ textAlign: "left" }}>Đặt lịch ngay</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5 pt-md-3">
          <Col lg="4" className="learninfor">
            <Row className="inforrow">
              <div className="text-container">
                <p>{recruitmentpage.title1}</p>
                <br></br>
                <img loading="lazy" src={Camera} alt="Overlay 1" className="overlay-image1" />
              </div>
            </Row>
            <Row className="inforrow">
              <div className="text-container">
                <p>{recruitmentpage.title2}</p>
                <img loading="lazy" src={SoftSkillicon} alt="Overlay 2" className="overlay-image2" />
              </div>
            </Row>
          </Col>


          {/* <Col lg="8" className="rightcol">
            <Row className="mt-3" >
              <Col lg="6" className="left_right_col">
                <a href={recruitmentpage.applylink} className="text_2" target="_blank" rel="noopener noreferrer">
                  <div id="button_apply" className="ac_btn btn" >
                    Đặt lịch ngay!
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </a>
              </Col>
            </Row>
          </Col> */}
        </Row>
      </Container >
    </HelmetProvider >
  );
};
