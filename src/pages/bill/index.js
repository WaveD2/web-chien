// Import React and necessary hooks
import React, { useEffect, useState } from "react";
// Import necessary components and styles
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css"; // Make sure this includes the CSS for animations
import { FaArrowCircleRight, FaRegHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { PiPaperPlaneTilt, PiHeartStraightFill } from "react-icons/pi";
import Preloader from "../../components/preload/Pre";
import home9 from "../../assets/images/home9.jpg";
// Import your data or any other components you need
import { dataabout, meta, departments } from "../../content_option";
import FocusRing from "../../components/focusring"; // Import the FocusRing component

// Define the About component
export const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const background = document.querySelector('.backgroundvideo img');
      const blur = scrollPosition * 0.015; // Làm mờ ảnh
      background.style.filter = `blur(${blur}px) brightness(0.6)`; // Làm mờ ảnh
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State to control when animations are added
  const [isAnimated, setIsAnimated] = useState(false);

  // Use useEffect to trigger animations when component mounts
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <HelmetProvider>
      <FocusRing />

      <Container className="About-header p-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Giới thiệu | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Preloader />

        <div className="backgroundvideo grain">
          <img loading="lazy" src={home9} alt="background" />
        </div>

        <Row className={`mb-0 mt-3 pt-md-3 ${isAnimated ? "slide-in-left" : ""}`} style={{ alignItems: 'baseline' }}>
          <Col lg="6">
            <h1 className="display-4 mb-4" style={{ textAlign: "left" }}>Thông tin về tôi</h1>
          </Col>

        </Row>

        <hr className="mt-3"></hr>

        <Row className={`sec_sp ${isAnimated ? "slide-in-right" : ""}`} style={{ marginTop: '10px', marginBottom: '20px' }}>
          <Col lg="4">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <p className="breakword">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        <Row className={`sec_sp ${isAnimated ? "slide-in-left" : ""}`} style={{ marginTop: '10px', marginBottom: '20px' }}>
          <Col lg="4">
            <h3 className="color_sec py-4"></h3>
          </Col>
          <Col lg="8">
            <p className="breakword">{dataabout.goals}</p>
          </Col>
        </Row>

        <Row className={`sec_sp ${isAnimated ? "slide-in-right" : ""}`}>
          <Row>
            <h3 className="color_sec py-4">  </h3>
          </Row>

        </Row>


        <Row className="mt-3 mb-3"></Row>
      </Container>
    </HelmetProvider>
  );
};

// HeartIcon component with toggle functionality
const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <span onClick={toggleLike} style={{ cursor: "pointer" }}>
      {isLiked ? (
        <PiHeartStraightFill color="red" className="icon" />
      ) : (
        <FaRegHeart className="icon" />
      )}
    </span>
  );
};

export default About;
