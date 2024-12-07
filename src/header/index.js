import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
// import clublogo_transparent from "../assets/images/clublogo_transparent.png";
const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    // document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">

          <Link className="navbar-brand nav_ac" to="/" ></Link> 
          {/* logo studio */}
          <div className="d-flex" >
            <ul className="" style={{
              display : "flex",
              gap : "20px",
            }}>

                    <li className="menu_item" >
                      <Link onClick={handleToggle} style={{textDecoration : "none"}} to="/" className="my-3">Trang chủ</Link>
                    </li>
                    <li className="menu_item"  >
                      <Link onClick={handleToggle}  style={{textDecoration : "none"}}to="/activities" className="my-3">Sản phẩm</Link>
                    </li>
                    <li className="menu_item" >
                      <Link onClick={handleToggle} style={{textDecoration : "none"}} to="/recruitment" className="my-3">Đặt lịch</Link>
                    </li>
                    <li className="menu_item" >
                      <Link onClick={handleToggle} style={{textDecoration : "none"}} to="/contact" className="my-3"> Liên hệ</Link>
                    </li>
                    <li className="menu_item" >
                      <Link onClick={handleToggle} style={{textDecoration : "none"}} to="/about" className="my-3"> Giới thiệu </Link>
                    </li>
                    <li className="menu_item" >
                      <Link onClick={handleToggle} style={{textDecoration : "none"}} to="/login" className="my-3">Đăng Nhập</Link>
                    </li>
                  </ul>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

    </>
  );
};

export default Headermain;
