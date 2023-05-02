import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default MainLayout;
