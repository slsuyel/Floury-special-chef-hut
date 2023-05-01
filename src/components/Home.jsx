import React from "react";
import hero from "../assets/hero.jpg";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import './custom.css'
const Home = () => {
  const chefs = useLoaderData();
 // console.log(chefs);

  return (
    <div>
      <img src={hero} alt="" draggable={false} className="img-fluid w-100" />
      <div className="cefs-container">
        {chefs.map((chef) => (
          <HomeCard chef={chef} key={chef.ID} />
        ))}
      </div>
    </div>
  );
};

export default Home;
