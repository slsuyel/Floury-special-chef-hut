import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./custom.css";
import RecipesCard from "./RecipesCard";
import LazyLoad from "react-lazy-load";
const ChefRecipes = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const selected = data.find((d) => d.ID === id);
  // console.log(selected);
  const {
    ChefPicture,
    Recipes,
    Description,
    Likes,
    NumberOfRecipes,
    YearsOfExperience,
    ChefName,
  } = selected;
  return (
    <div className="p-3 row w-100">
      <div className="col-md-5">
        <LazyLoad>
          <img
            src={ChefPicture}
            alt=""
            className="banner-chef img-thumbnail my-4 p-2 w-100"
          />
        </LazyLoad>
      </div>
      <div className="card col-md-7">
        <h3>Name: {ChefName}</h3>
        <p>Description : {Description}</p>
        <p>Likes : {Likes}</p>
        <p>Number of recipes : {NumberOfRecipes}</p>
        <p>Years of experience : {YearsOfExperience}</p>
        <RecipesCard Recipes={Recipes} />
      </div>
    </div>
  );
};

export default ChefRecipes;
