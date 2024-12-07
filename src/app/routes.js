import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { Recruit } from "../pages/recruitment";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Activities } from "../pages/activities";
import { Contributors } from "../pages/contributors";
import Login from "../pages/login";
import AdminHome from "../Pagesadmin/home";// Import trang Home cho admin

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
        <Route path="/recruitment" element={<Recruit />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
