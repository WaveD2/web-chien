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
import Appointment from "../pages/appointment";

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
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
        <Route path="/recruitment" element={<Recruit />} />
        {/* Page admin */}
        <Route path="/appointment-mng" element={<Appointment />} />
        <Route path="/customer-mng" element={<Contributors />} />
        <Route path="/project-mng" element={<Contributors />} />
        <Route path="/bill-mng" element={<Contributors />} />
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
