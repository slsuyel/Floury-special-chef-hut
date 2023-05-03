import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import ContactUs from "../components/ContactUs";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
