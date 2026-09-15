import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { AnimatedPage, FloatingCta } from "../components/motion";

const AnimatedRoutes = withRouter(({ location }) => (
  <AnimatePresence mode="wait">
    <AnimatedPage key={location.pathname}>
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatedPage>
  </AnimatePresence>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
      <FloatingCta />
    </div>
  );
}

export default AppRoutes;
