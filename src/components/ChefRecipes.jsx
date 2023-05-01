import React from "react";
import { Card as div } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import "./custom.css";
import RecipesCard from "./RecipesCard";
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
    <div className="row p-3">
      <div className="col-md-6">
        <img src={ChefPicture} alt="" className="banner-chef" />
      </div>
      <div className="card col-md-6 p-3">
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
