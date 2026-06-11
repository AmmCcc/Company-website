import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Malaysia from "./pages/Malaysia";
import Thailand from "./pages/Thailand";
import Singapore from "./pages/Singapore";
import Consultation from "./pages/Consultation";

// Scroll to the top whenever the page changes (unless linking to an in-page #section).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/malaysia" element={<Malaysia />} />
        <Route path="/thailand" element={<Thailand />} />
        <Route path="/singapore" element={<Singapore />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
