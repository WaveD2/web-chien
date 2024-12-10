import React from "react";
import { lazyWithPreload } from "react-lazy-with-preload";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Preloader from "../../components/preload/Pre";

const Activities = lazyWithPreload(() => import("../activities/activeslide"));
Activities.preload();

export const Home = () => {
  const user = localStorage.getItem("loggedInUser");

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Preloader />
        <div
          className="backgroundimage"
          id="backimage"
          style={{
            backgroundImage: "url('/home6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        ></div>
        <div className="introsec1">
          <div className="intro_sec d-block d-lg-flex align-items-center">
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center" style={{ marginTop: "100px" }}>
              <div className="align-self-center">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">Chein Production</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                          introdata.animated.fourth,
                          introdata.animated.five,
                          introdata.animated.six,
                          introdata.animated.one,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <p className="mb-1x breakword">{introdata.description}</p>

                  <div className="intro_btn-action pb-5">
                    <Link to={`${user ? "/appointment-mng" : "/recruitment"}`}>
                      <div id="button_h" className="ac_btn btn">
                        {user ? "Quản lý lịch" : "Đặt lịch ngay!"}
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div>
                  <p style={{ marginTop: "10px" }}>#CheinProduction</p>
                  <p style={{ marginTop: "-20px" }}>#Lưu_chọn_khoảnh_khắc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
