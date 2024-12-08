import React, { useEffect, useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { logotext, page_header, socialprofils } from "../content_option";
// import clublogo_transparent from "../assets/images/clublogo_transparent.png";

const Headermain = () => {
  const [page, setPage] = useState("public");

  const navigate = useNavigate();



  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      navigate("/");
      setPage("private")
    }
  }, [navigate]);

  return (
    <React.Fragment>
      <header className="fixed-top site__header wrapper__header">
        <div className="d-flex align-items-center justify-content-between h-full">
          <Link className="navbar-brand nav_ac" to="/" ></Link>
          {/* logo studio */}
          <div className="d-flex">
            <ul className="" style={{
              display: "flex",
              gap: "20px",
              margin: 0,
              padding: 0
            }}>
              {
                page_header[page].map((item, i) => {
                  return (
                    <li key={i} className="menu_item" >
                      <Link onClick={item?.handler} style={{ textDecoration: "none", ...item.style }} to={item.path} className="my-3">{item.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </React.Fragment>
  );
};

export default Headermain;