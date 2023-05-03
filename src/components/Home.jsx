import React from "react";
import hero from "../assets/hero.jpg";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import "./custom.css";
import TestimonialSection from "./TestimonialSection";
import ContactUs from "./ContactUs";
import LazyLoad from "react-lazy-load";
const Home = () => {
  const chefs = useLoaderData();
  // console.log(chefs);

  return (
    <div>
      <LazyLoad>
               <img src={hero} alt="" draggable={false} className="img-fluid w-100" />
      </LazyLoad>
      <div className="cefs-container">
        {chefs.map((chef) => (
          <HomeCard chef={chef} key={chef.ID} />
        ))}
      </div>
      <TestimonialSection />
      <ContactUs />
    </div>
  );
};

export default Home;
